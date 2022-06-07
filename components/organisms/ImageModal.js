import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import Image from 'next/image';
import { breakpoint } from 'breakpoints';

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

const ImageWrapper = styled.div`
  position: relative;
`;

const ImageModal = ({ src, closeModal }) => (
  <Portal>
    <StyledPortalContainer onClick={closeModal}>
      <ImageWrapper>
        <Image
          src={src}
          alt={`Zoomed project example photo.`}
          layout="intrinsic"
          placeholder="blur"
        />
      </ImageWrapper>
    </StyledPortalContainer>
  </Portal>
);

// ImageModal.propTypes = {

// };

export default ImageModal;
