import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { breakpoint } from 'breakpoints';
import routes from 'routes';

const FooterLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  @media screen and (min-width: ${breakpoint.M}) {
    width: 38%;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    width: 40%;
  }
`;

const StyledLogo = styled.img`
  width: 100%;
  max-width: 30rem;
  margin: 2rem 0;
`;

const FooterListContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${breakpoint.L}) {
    justify-content: space-around;
  }
`;

const FooterListWrapper = styled.div`
  margin-left: 2rem;
  padding: 0 15px;
  @media screen and (max-width: ${breakpoint.L}) {
    margin-left: 5px;
    padding: 0 5px;
  }
`;

const FooterLinksList = styled.ul`
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
  li {
    line-height: 1.5;
    padding: 1rem 0;

    &:hover {
      color: ${({ theme }) => theme.color.textPrimary};
    }
  }
  @media screen and (max-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-top: 5px;
    margin-left: 10px;
  }
`;

const FooterLinks = () => {
  const { locale } = useRouter();

  return (
    <FooterLinksWrapper>
      <StyledLogo src="/icons/devconelogo.svg" />
      <FooterListContainer>
        <FooterListWrapper>
          <FooterLinksList>
            {routes?.map(({ name, path }) => (
              <li key={path}>
                {/* <Link href={path}>{name?.[locale]}</Link> */}
                <p href={path}>{name?.[locale]}</p>
              </li>
            ))}
          </FooterLinksList>
        </FooterListWrapper>
      </FooterListContainer>
    </FooterLinksWrapper>
  );
};

export default FooterLinks;
