import styled from 'styled-components';
import { breakpoint } from 'breakpoints';
import { contactIcons } from 'assets/data/contactIcons';

const FooterSocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  order: 2;

  @media screen and (min-width: ${breakpoint.S}) {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${breakpoint.XL}) {
    order: 1;
    align-self: center;
    width: 15%;
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  width: 5rem;
  margin: 2rem 3rem 2rem;
  transition: opacity 0.3s;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const FiiterSocial = () => (
  <FooterSocialWrapper>
    {contactIcons?.map((icon) => (
      <a
        key={icon.id}
        href={icon.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledImg src={icon.icon} alt="contact" />
      </a>
    ))}
  </FooterSocialWrapper>
);

export default FiiterSocial;
