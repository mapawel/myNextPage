import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import Heading from 'components/atoms/Heading';
import { breakpoint } from 'breakpoints';

const reverseAnim = keyframes`
  0% {
    opacity: 1;
    transform: rotate(0);
  }
  49% {
    opacity: 0;
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: rotate(180deg);
  }
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem 3rem 3rem;
  flex-shrink: 0;
  flex-grow: 0;

  ${({ upSideDown }) =>
    upSideDown &&
    css`
      animation: ${reverseAnim} 0.35s 1.2s both;
    `}

  @media screen and (min-width: ${breakpoint.M}) {
    padding: 4rem 5rem 5rem;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.1;

  @media screen and (max-width: 390px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: ${breakpoint.XS}) {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    margin-bottom: 2rem;
    font-size: 3.6rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: 5.8rem;
  }
`;

const StyledImgBox = styled.div`
  position: relative;
  z-index: 0;
  height: 11rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${breakpoint.XS}) {
    height: 15rem;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    height: 17rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    height: 25rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    height: 26rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    height: 30rem;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 0;
  width: calc(100% - 20px);
  height: 90px;
  border: ${({ theme }) => `1px solid ${theme.color.textSecondary}`};

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.25;
    transition: opacity 0.35s;
  }

  :nth-child(1) {
    left: 50%;
    z-index: 5;
    transform: translate(-50%, 0);
    transition: transform 0.25s;
  }
  :nth-child(2) {
    bottom: 0;
    z-index: 0;
    transform: translate(0, 25%);
    transition: transform 0.25s;
  }
  :nth-child(3) {
    top: 50%;
    right: 0;
    z-index: 2;
    transform: translate(0, -40%);
  }

  @media screen and (min-width: ${breakpoint.XS}) {
    height: 100px;
    :nth-child(2) {
      transform: translate(0, 0%);
    }
    :nth-child(3) {
      transform: translate(0, -50%);
    }
  }

  @media screen and (min-width: ${breakpoint.S}) {
    height: 140px;
    :nth-child(2) {
      transform: translate(0, 40%);
    }
    :nth-child(3) {
      transform: translate(0, -30%);
    }
  }

  @media screen and (min-width: ${breakpoint.M}) {
    height: 190px;
    :nth-child(2) {
      transform: translate(0, 20%);
    }
    :nth-child(3) {
      transform: translate(0, -40%);
    }
  }

  @media screen and (min-width: ${breakpoint.L}) {
    height: 200px;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    height: 220px;
  }
`;

const ProjectOnCubeBox = ({ title, images, upSideDown }) => {
  const { locale } = useRouter();

  return (
    <StyledContainer upSideDown={upSideDown}>
      <StyledHeading>{title?.[locale]?.toUpperCase()}</StyledHeading>
      <StyledImgBox>
        {images &&
          images.length !== 0 &&
          images.slice(0, 3).map(({ id, img }) => (
            <ImageWrapper key={id}>
              <Image
                src={img}
                alt=" "
                layout="responsive"
                placeholder="blur"
                sizes={`(max-width: ${breakpoint.L}) 50vw, (max-width: ${breakpoint.XL}) 40vw, 22vw`}
              />
            </ImageWrapper>
          ))}
      </StyledImgBox>
    </StyledContainer>
  );
};

ProjectOnCubeBox.propTypes = {
  title: PropTypes.objectOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.object),
  upSideDown: PropTypes.bool,
};

ProjectOnCubeBox.defaultProps = {
  title: { en: '', pl: '' },
  images: [],
  upSideDown: null,
};

export default ProjectOnCubeBox;
