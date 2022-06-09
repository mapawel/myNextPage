import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { breakpoint } from 'breakpoints';
import Button from 'components/atoms/Button';
import { uiSubs } from 'assets/data/uiSubs';

const FooterContactsWrapper = styled.div`
  order: -1;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${breakpoint.M}) {
    width: 60%;
    order: 1;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 70%;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    width: 45%;
    order: 2;
  }
`;

const ButtonContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoint.S}) {
    margin-right: 2rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    /* align-self: end; */
    margin-right: 5rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    align-self: end;
    margin-right: 10rem;
    width: 70rem;
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
        <Link href="/contact" passHref>
          <StyledButton variant="cta">{uiSubs?.contact?.[locale]?.toUpperCase()}</StyledButton>
        </Link>
      </ButtonContainer>
    </FooterContactsWrapper>
  );
};

export default FooterContacts;
