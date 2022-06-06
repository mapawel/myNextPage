import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import Image from 'next/image';

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

const ImageModal = ({ src, closeModal }) => (
  <Portal>
    <StyledPortalContainer onClick={closeModal}>
      <Image src={src} />
    </StyledPortalContainer>
  </Portal>
);

// ImageModal.propTypes = {

// };

export default ImageModal;
