import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import { breakpoint } from 'breakpoints';

const StyledContainer = styled.div`
  display: flex;
  max-width: 42rem;
  margin: ${({ inSwiper }) => (inSwiper ? '0' : '3rem 0 8rem')};
  margin: ${({ forceMargins }) => forceMargins && '4rem auto'};
`;

const StyledIconBox = styled.div`
  width: 5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: start;
  margin: 0 1rem;

  @media screen and (min-width: ${breakpoint.S}) {
    margin-right: 3rem;
  }
  @media screen and (min-width: ${breakpoint.M}) {
    width: 7rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-right: 1rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-right: 3rem;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 10rem;
  margin-top: 1.5rem;
`;

const StyledTxtBox = styled.div`
  padding-left: 2rem;
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: 4.8rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ inSwiper, theme }) => inSwiper && theme.fontSize.m};
  }

  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ inSwiper, theme }) =>
      inSwiper ? theme.fontSize.m : '5rem'};
  }
`;

const Number = styled.span`
  display: block;
  width: 9rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.textPrimary};
  margin-top: 1.5rem;
  
  @media screen and (min-width: ${breakpoint.M}) {
    margin-top: 1rem;
  }
  @media screen and (min-width: ${breakpoint.L}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const IconInfo = ({ title, content, icon, inSwiper, forceMargins }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <StyledContainer inSwiper={inSwiper} forceMargins={forceMargins}>
      {inSwiper ? (
        <Number>{icon}</Number>
      ) : (
        <StyledIconBox>
          <StyledImg src={icon} alt=">" />
        </StyledIconBox>
      )}
      <StyledTxtBox>
        <StyledHeading inSwiper={inSwiper}>
          {title?.[locale]?.toUpperCase()}
        </StyledHeading>
        {content?.[locale]?.map((bullet) => (
          <Paragraph inSwiper={inSwiper} key={bullet}>
            {bullet}
          </Paragraph>
        ))}
      </StyledTxtBox>
    </StyledContainer>
  );

  IconInfo.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.string.isRequired,
  };
};

export default IconInfo;
