import { useRouter } from 'next/router';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import Button from 'components/atoms/Button';
import { breakpoint } from 'breakpoints';
import ButtonLink from 'components/atoms/ButtonLink';
import { uiSubs } from 'assets/data/uiSubs';

const StyledPortalContainer = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 95vw;
  max-width: 800px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 3rem;
  border: ${({ theme }) => `1px solid ${theme.color.textPrimary}`};
  border-radius: 3px;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    `${theme.color.textPrimary} ${theme.color.backSecondary}`};

  &::-webkit-scrollbar {
    width: 1vw;
    max-width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.textPrimary};
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.backSecondary};
  }

  @media screen and (min-width: ${breakpoint.M}) {
    padding: 3rem 4rem;
  }
`;

const TxtParagraph = styled.p`
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.black};
  :last-of-type {
    margin-bottom: 2rem;
  }
  word-wrap: anywhere;

  @media screen and (min-width: ${breakpoint.M}) {
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 1.5;
    :last-of-type {
      margin-bottom: 3rem;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;
`;

const TextModal = ({ txt = [], closeModal, redirect }) => {
  const { locale } = useRouter();

  return (
    <Portal>
      <StyledPortalContainer onClick={closeModal}>
        <TextContainer>
          {txt.map((par) => (
            <TxtParagraph key={par}>{par}</TxtParagraph>
          ))}
          <Buttons>
            <Button onClick={closeModal}>close</Button>
            {redirect && (
              <ButtonLink
                href={redirect}
                target="_blank"
                rel="noopener noreferrer"
              >
                {uiSubs?.live?.[locale]}
              </ButtonLink>
            )}
          </Buttons>
        </TextContainer>
      </StyledPortalContainer>
    </Portal>
  );
};

// TextModal.propTypes = {

// };

export default TextModal;
