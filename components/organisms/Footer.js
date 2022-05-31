import Link from 'next/link';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import { breakpoint } from 'breakpoints';

const StyledFooter = styled.footer`
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
  font-weight: 900;
  color: ${({ theme }) => theme.color.textSecondary};
`;

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledFooter>
      <StyledParagraph>
        &copy;{' '}
        <Link href="https://devdefer.com" passHref>
          <StyledA>devdefer</StyledA>
        </Link>
        , All rights reserved
      </StyledParagraph>
      <StyledArrowBox onClick={handleClick}>
        <StyledUpTxt>UP</StyledUpTxt>
      </StyledArrowBox>
    </StyledFooter>
  );
};

export default Footer;
