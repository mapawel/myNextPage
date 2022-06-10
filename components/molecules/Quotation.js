import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoint } from 'breakpoints';
import piotrPimg from 'public/images/piotrp.jpeg';

const QuotWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.color.primaryOpacity};
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.5;
  
  @media screen and (min-width: ${breakpoint.S}) {
    padding: 3rem 2rem;
    justify-content: start;
  }
  
  @media screen and (min-width: ${breakpoint.M}) {
    padding: 4rem 3rem;
    justify-content: end;
  }

  @media screen and (min-width: ${breakpoint.L}) {
  }
`;

const StyledQuotationTxtBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  font-style: italic;

`;

const StyledQuotationAuthor = styled.footer`
  z-index: 2;
  padding: 0.4rem 3rem;
  margin-left: auto;
  margin-top: -1rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  
  @media screen and (min-width: ${breakpoint.S}) {
    margin-left: -2rem;
  }
`;

const StyledQuotationTxt = styled.p`
  width: 100%;
  padding: 1rem 0 1rem 3.5rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 30%;
  height: 0;
  padding: 15% 0;
  border-radius: 50%;
  margin-top: 2rem;
  margin-left: 2rem;
  background-image: ${({ img }) => img && `url(${img?.url})`};
  background-position: center;
  background-size: cover;
  overflow: hidden;
  > span {
    transform: translateY(-45%) scale(1.2);
  }
  
  @media screen and (min-width: ${breakpoint.XS}) {
    width: 20%;
    padding: 10% 0;
  }
  @media screen and (min-width: ${breakpoint.S}) {
    width: 12rem;
    padding: 6rem 0;
  }
`;

const StyledIcon = styled.img`
  position: absolute;
  width: 3rem;
  @media screen and (min-width: ${breakpoint.L}) {
    width: 4rem;
    transform: translateX(-1rem);
  }
`;

const Quotation = ({ text, img, author }) => (
  <QuotWrapper component="article" size={6} round>
    <StyledQuotationTxtBox>
      <StyledIcon src="/icons/quot.svg" />
      <StyledQuotationTxt>{text}</StyledQuotationTxt>
    </StyledQuotationTxtBox>
    <ImageWrapper>
      <Image
        src={piotrPimg}
        alt=" "
        layout="responsive"
        placeholder="blur"
        sizes={`(max-width: ${breakpoint.XS}) 25vw, (max-width: ${breakpoint.S}) 15vw, 5vw`}
      />
    </ImageWrapper>
    <StyledQuotationAuthor>
      <p>{author}</p>
    </StyledQuotationAuthor>
  </QuotWrapper>
);

Quotation.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.object,
  author: PropTypes.string.isRequired,
};

Quotation.defaultProps = {
  img: null,
};

export default Quotation;
