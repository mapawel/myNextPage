import styled from 'styled-components';
import { breakpoint } from 'breakpoints';
import { contactIcons } from 'assets/data/contactIcons';

const FooterSocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;

  @media screen and (min-width: ${breakpoint.XL}) {
    order: 0;
    width: 10%;
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  width: 5rem;
  margin: 0 3rem 2rem;
  transition: opacity 0.3s;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    margin: 1rem 1rem 5rem;
  }
  @media screen and (min-width: ${breakpoint.XL}) {
    width: 7rem;
  }
`;

const FiiterSocial = () => (
  <FooterSocialWrapper>
    {contactIcons?.map((icon) => (
      <StyledImg
        key={icon.id}
        src={icon.icon}
        alt="contact"
        onClick={() => window.open(icon.link, '_blank')}
      />
    ))}
  </FooterSocialWrapper>
);

export default FiiterSocial;
