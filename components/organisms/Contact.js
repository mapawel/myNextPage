import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Wrapper from 'components/templates/Wrapper';
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
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (min-width: ${breakpoint.S}) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 5rem;
`;

const StyledImg = styled.img`
  width: 5rem;
  margin: 2rem 3rem 2rem;
  transition: opacity 0.3s;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    margin: 1rem;
  }
  @media screen and (min-width: ${breakpoint.XL}) {
    width: 7rem;
  }
`;

const Contact = () => {
  const { locale } = useRouter();
  const sectionId = sectiontitles?.[4]?.titleMenuId;

  return (
    <Wrapper as="section" id={sectionId}>
      <TwoColumns>
        <StyledMediaBox>
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
