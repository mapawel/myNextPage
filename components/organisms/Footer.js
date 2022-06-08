import Link from 'next/link';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import Wrapper from 'components/templates/Wrapper';
import { breakpoint } from 'breakpoints';
import { sectiontitles } from 'assets/data/sectiontitles';
import { scrollToSection } from 'helpers/scrollToSection';
import FooterLinks from 'components/molecules/FooterLinks';
import FooterContacts from 'components/molecules/FooterContacts';
import FooterSocial from 'components/molecules/FooterSocial';

const Footerwrapper = styled.footer`
  z-index: -1;
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${({ theme }) => theme.color.backSecondary};
  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 25%;
    width: 0;
    height: 0;
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    opacity: 0.3;
  }
  ::before {
    left: 5%;
    border-bottom: ${({ theme }) => `6rem solid ${theme.color.primaryOpacity}`};
  }
  ::after {
    border-top: ${({ theme }) => `6rem solid ${theme.color.primaryOpacity}`};
  }

  & + div {
    width: 0;
    height: 0;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    position: fixed;
    bottom: 0;
    height: 67rem;
    width: 100%;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & + div {
      height: 67rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  /* padding: 15px; */
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${breakpoint.M}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const FooterBar = styled.div`
  margin-top: auto;
  position: relative;
  height: 6rem;
  background-color: ${({ theme }) => theme.color.back};
  display: flex;
  justify-content: center;
  align-items: center;
  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 25%;
    width: 0;
    height: 0;
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    opacity: 0.3;
  }
  ::before {
    left: 5%;
    border-bottom: ${({ theme }) => `6rem solid ${theme.color.primaryOpacity}`};
  }
  ::after {
    border-top: ${({ theme }) => `6rem solid ${theme.color.primaryOpacity}`};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.textPrimary};
  text-align: center;

  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const StyledA = styled.a`
  color: ${({ theme }) => theme.color.textPrimary};
  cursor: pointer;
`;

const StyledArrowBox = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 6rem solid transparent;
  border-right: 6rem solid transparent;
  border-bottom: ${({ theme }) => `6rem solid ${theme.color.primaryOpacity}`};
  margin-left: 4rem;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const StyledUpTxt = styled(StyledParagraph)`
  position: relative;
  top: 3rem;
  line-height: 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.textSecondary};
`;

const Footer = () => {
  return (
    <Footerwrapper>
      <Wrapper>
        <Container>
          <FooterContacts />
          <FooterLinks />
          <FooterSocial />
        </Container>
      </Wrapper>
      <FooterBar>
        <StyledParagraph>
          &copy; {new Date().getFullYear()}{' '}
          <Link href="https://devdefer.com" passHref>
            <StyledA>dev.defer</StyledA>
          </Link>
          , All rights reserved
        </StyledParagraph>
        <StyledArrowBox
          onClick={() => scrollToSection(sectiontitles?.[0]?.titleMenuId)}
        >
          {/* // TODO it should be a button */}
          <StyledUpTxt>UP</StyledUpTxt>
        </StyledArrowBox>
      </FooterBar>
    </Footerwrapper>
  );
};

export default Footer;
