import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { breakpoint } from 'breakpoints';
import Button from 'components/atoms/Button';
import { uiSubs } from 'assets/data/uiSubs';

const FooterContactsWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${breakpoint.M}) {
    /* width: 58%; */
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    order: 1;
    /* width: 40%; */
  }
`;

const ButtonContainer = styled.div`
align-self: stretch;
/* border: 1px solid lime; */
display: flex;
flex-direction: column;
@media screen and (min-width: ${breakpoint.S}) {
    align-self: end;
    margin-right: 2rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    margin-right: 5rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-right: 10rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-right: 14rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: ${breakpoint.S}) {
    margin: 1rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    padding: 2.5rem 3rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const FooterContacts = () => {
  const { locale } = useRouter();
  return (
    <FooterContactsWrapper>
      <ButtonContainer>
        <Link href="/solutions" passHref>
          <StyledButton>{uiSubs?.ourSolutions?.[locale]}</StyledButton>
        </Link>
      </ButtonContainer>
    </FooterContactsWrapper>
  );
};

export default FooterContacts;
