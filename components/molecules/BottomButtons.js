import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { breakpoint } from 'breakpoints';
import ButtonLink from 'components/atoms/ButtonLink';
import Rect from 'components/atoms/Rect';

const StyledListContainer = styled.div`
  position: relative;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoint.S}) {
    flex-direction: row;
    justify-content: space-between;
    margin-right: 2rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    justify-content: end;
    margin-right: 5rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    justify-content: space-between;
    margin-right: 10rem;
    width: 70rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-right: 14rem;
  }
`;

const StyledButtonLink = styled(ButtonLink)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: ${breakpoint.S}) {
    margin: 1rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    padding: 2.5rem 3rem;
  }
`;

const StyledRect = styled(Rect)`
  position: absolute;
  width: 50rem;
  height: 50rem;
  top: -50%;
  right: 10%;
  transform: rotate(10deg);

  @media screen and (min-width: ${breakpoint.S}) {
    top: -100%;
    width: 60rem;
    height: 60rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 70rem;
    height: 70rem;
  }
`;

const BottomButtons = ({linkOne, linkTwo}) => {
  const { locale } = useRouter();

  return (
    <StyledListContainer>
      <ButtonContainer>
        <Link href={linkOne?.href} passHref>
          <StyledButtonLink>{linkOne?.label?.[locale]}</StyledButtonLink>
        </Link>
        <Link href={linkTwo?.href} passHref>
          <StyledButtonLink>{linkTwo?.label?.[locale]}</StyledButtonLink>
        </Link>
      </ButtonContainer>
      <StyledRect />
    </StyledListContainer>
  );
};

export default BottomButtons;
