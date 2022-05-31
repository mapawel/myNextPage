import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import Button from 'components/atoms/Button';
import { breakpoint } from 'breakpoints';

const StyledPortalContainer = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000F2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 95vw;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 3rem;
  border: ${({ theme }) => `1px solid ${theme.color.textPrimary}`};
  border-radius: 3px;
  
  @media screen and (min-width: ${breakpoint.M}) {
    padding: 3rem 4rem;
    }
`;

const TxtParagraph = styled.p`
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.color.black};
  :last-of-type{
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
    line-height: 1.5;
    :last-of-type{
      margin-bottom: 3rem;
    }
    }
`;

const TextModal = ({ txt = [], closeModal }) => (
  <Portal>
    <StyledPortalContainer
      onClick={closeModal}
    >
      <TextContainer>
        {txt.map((par) => (
          <TxtParagraph
            key={par}
          >
            {par}
          </TxtParagraph>
        ))}
        <Button
          onClick={closeModal}
        >
          close
        </Button>
      </TextContainer>
    </StyledPortalContainer>
  </Portal>
);

// TextModal.propTypes = {

// };

export default TextModal;
