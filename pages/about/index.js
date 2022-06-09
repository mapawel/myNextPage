import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import TwoColumns from 'components/templates/TwoColumns';
import SectionHeading from 'components/atoms/SectionHeading';
import IconInfo from 'components/atoms/IconInfo';
import Rect from 'components/atoms/Rect';
import ButtonLink from 'components/atoms/ButtonLink';
import TextBox from 'components/molecules/TextBox';
import Heading from 'components/atoms/Heading';
import useBrowser from 'hooks/useBrowser';
import { breakpoint } from 'breakpoints';
import { sectiontitles } from 'assets/data/sectiontitles';
import { aboutPage } from 'assets/data/aboutPage';
import { aboutPageIcons } from 'assets/data/aboutPageIcons';
import SwiperAbout from 'components/organisms/SwiperAbout';
import { uiSubs } from 'assets/data/uiSubs';
import routes from 'routes';

const StyledTwoColumns = styled(TwoColumns)`
  margin: 2rem 0 5rem;
  :last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${breakpoint.S}) {
    flex-direction: column;
  }
  @media screen and (min-width: ${breakpoint.L}) {
    flex-direction: row;
    align-items: center;
  }
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

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoint.L}) {
    order: ${({ invert }) => (invert ? -1 : null)};
    padding: ${({ invert }) => (invert ? '0 10rem 0 0' : '0 0 0 10rem')};
  }
`;

const StyledCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10rem;
`;

const Arrows = styled.img`
  display: block;
  transform: scaleX(1.5) rotate(45deg);
  height: 1.5rem;
  margin: 0 auto;
`;

const StyledListContainer = styled.div`
  position: relative;
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

const StyledHeading = styled(Heading)`
  margin-bottom: 9rem;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media screen and (max-width: 390px) {
    font-size: 3.4rem;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: 4.8rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: 6.8rem;
  }
`;

const AboutPage = () => {
  const isBrowser = useBrowser();
  const { locale } = useRouter();
  const title = routes?.[2]?.name?.[locale];

  return (
    <>
      <Head>
        <title>{headSubs?.about?.title?.[locale]}</title>
        <meta
          name="description"
          content={headSubs?.about?.description?.[locale]}
        />
      </Head>
      <main>
        <Wrapper as="section">
          <SectionHeading nomargin>{title}</SectionHeading>
          <StyledTwoColumns>
            <TextBox data={aboutPage?.top} triangle />
            <StyledColumn></StyledColumn>
          </StyledTwoColumns>
          <StyledCarouselContainer id="swiper">
            <StyledHeading bold>
              {aboutPageIcons?.title?.[locale]}
            </StyledHeading>

            {isBrowser ? (
              <>
                <SwiperAbout slides={aboutPageIcons?.listed} />
                <Arrows src="/icons/arrows.svg" />
              </>
            ) : (
              <>
                {aboutPageIcons?.listed?.map(
                  ({ id, icon, title, content }, index) => (
                    <IconInfo
                      inSwiper
                      forceMargins
                      key={id}
                      title={title}
                      content={content}
                      icon={index + 1}
                    />
                  )
                )}
              </>
            )}
          </StyledCarouselContainer>
          <StyledListContainer>
            <ButtonContainer>
              <Link href="/" passHref>
                <StyledButtonLink>
                  {uiSubs?.home?.[locale]}
                </StyledButtonLink>
              </Link>
              <Link href="/projects" passHref>
                <StyledButtonLink>
                  {uiSubs?.ourProjects?.[locale]}
                </StyledButtonLink>
              </Link>
            </ButtonContainer>
            <StyledRect />
          </StyledListContainer>
        </Wrapper>
      </main>
    </>
  );
};

export default AboutPage;
