import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { breakpoint } from 'breakpoints';
import routes from 'routes';

const FooterLinksWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media screen and (min-width: ${breakpoint.M}) {
    width: 35%;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 30%;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    width: 35%;
  }
`;

const StyledLogo = styled.img`
  width: 100%;
  max-width: 30rem;
  margin: 2rem 0;
`;

const FooterListContainer = styled.div`
  align-self: center;
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

  @media screen and (max-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-top: 5px;
    margin-left: 10px;
  }
`;

const StyledAtag = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 1rem 0;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.textPrimary};
  }
`;

const FooterLinks = () => {
  const { locale } = useRouter();

  return (
    <FooterLinksWrapper>
      <Link href="/">
        <a>
          <StyledLogo src="/icons/devdeferlogo.svg" alt="DEVDEFER" />
        </a>
      </Link>
      <FooterListContainer>
        <FooterListWrapper>
          <FooterLinksList>
            {routes?.map(({ name, path }) => (
              <li key={path}>
                <Link href={path} passHref>
                  <StyledAtag>{name?.[locale]}</StyledAtag>
                </Link>
              </li>
            ))}
          </FooterLinksList>
        </FooterListWrapper>
      </FooterListContainer>
    </FooterLinksWrapper>
  );
};

export default FooterLinks;
