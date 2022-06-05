import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { breakpoint } from 'breakpoints';
import useBrowser from 'hooks/useBrowser';

const TrianglesBox = styled.div`
  z-index: 10;
  position: fixed;
  transform: translate(-27px, -5px);
  opacity: ${({ manuBarVisible }) => (manuBarVisible ? 1 : 0)};
  transition: opacity 0.3s;
`;

const Triangle = styled.div`
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  border-left: 5rem solid transparent;
  border-right: 5rem solid transparent;
  border-top: ${({ theme }) => `5rem solid ${theme.color.particles}`};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.35)};
  transition: transform 0.2s;
  :nth-child(2) {
    transform: translate(80px, 0);
  }
  ${({ isActive }) =>
    isActive &&
    css`
      transform: translate(0, 5px);
      &:nth-child(2) {
        transform: translate(80px, 5px);
      }
    `}
`;

const LocaleLabel = styled.a`
  position: absolute;
  bottom: 0;
  transform: translate(-50%, -50%);
  text-decoration: none;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.textPrimary};
  padding: 0.3rem;
  cursor: pointer;
  flex-grow: 0;
  z-index: 10;

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const LocaleSwitch = ({ manuBarVisible }) => {
  const { pathname, query, asPath, locale: activeLocale } = useRouter();
  const isBrowser = useBrowser();

  return (
    <TrianglesBox manuBarVisible={manuBarVisible}>
      <Triangle isActive={activeLocale === 'pl'}>
        {isBrowser && (
          <Link href={{ pathname, query }} passHref as={asPath} locale="pl">
            <LocaleLabel>PL</LocaleLabel>
          </Link>
        )}
      </Triangle>
      <Triangle isActive={activeLocale === 'en'}>
        {isBrowser && (
          <Link href={{ pathname, query }} passHref as={asPath} locale="en">
            <LocaleLabel>EN</LocaleLabel>
          </Link>
        )}
      </Triangle>
    </TrianglesBox>
  );
};

export default LocaleSwitch;
