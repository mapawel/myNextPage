import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'components/atoms/Button';
import { uiSubs } from 'assets/data/uiSubs';
import TextModal from 'components/organisms/TextModal';
import { contactForm } from 'assets/data/contactForm';

const ConsentsWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem 2rem 1rem;
  background-color: ${({ theme }) => theme.color.blend};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & > p {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    font-style: italic;
    & > a {
      color: ${({ theme }) => theme.color.textSecondary};
      font-size: ${({ theme }) => theme.fontSize.xxs};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-style: italic;
      text-decoration: none;
    }
  }
`;

const Mainconsents = ({ onClick }) => {
  const { locale } = useRouter();
  const [isPolicyVisible, setShowPolicy] = useState(false);

  return (
    <ConsentsWrapper>
      <p>
        {uiSubs.cookiesInfo.popup[locale]}
        <Button variant="link" onClick={() => setShowPolicy(true)}>
          {uiSubs.cookiesInfo.link[locale]}
        </Button>
      </p>
      <Button variant="noborder" onClick={onClick}>
        OK
      </Button>
      {isPolicyVisible && (
        <TextModal
          txt={contactForm?.privacyPolicyParagraphs?.[locale]}
          closeModal={() => setShowPolicy(false)}
        />
      )}
    </ConsentsWrapper>
  );
};

export default Mainconsents;
