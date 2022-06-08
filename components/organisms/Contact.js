import { useRouter } from 'next/router';
import styled from 'styled-components';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import Heading from 'components/atoms/Heading';
import MessageForm from 'components/molecules/MessageForm';
import TwoColumns from 'components/templates/TwoColumns';
import { breakpoint } from 'breakpoints';
import { sectiontitles } from 'assets/data/sectiontitles';
import { contactForm } from 'assets/data/contactForm';
import { contactIcons } from 'assets/data/contactIcons';

const StyledMessageBox = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 90rem;

  @media screen and (min-width: ${breakpoint.S}) {
    width: 70%;
  }
`;

const StyledMediaBox = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 5rem;

  @media screen and (min-width: ${breakpoint.S}) {
    flex-direction: column;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 5rem;
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

const StyledSection = styled.section`
  min-height: 100vh;
`;

const Contact = () => {
  const { locale } = useRouter();
  const sectionId = sectiontitles?.[4]?.titleMenuId;

  return (
    <Wrapper as="section" id={sectionId}>
      <TwoColumns>
        <StyledMediaBox>
          {contactIcons?.map((icon) => (
            <StyledImg
              key={icon.id}
              src={icon.icon}
              alt="contact"
              onClick={() => window.open(icon.link, '_blank')}
            />
          ))}
        </StyledMediaBox>
        <StyledMessageBox>
          <StyledHeading>{contactForm?.heading?.[locale]}</StyledHeading>
          <MessageForm data={contactForm} />
        </StyledMessageBox>
      </TwoColumns>
    </Wrapper>
  );
};

export default Contact;
