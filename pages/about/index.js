import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import TwoColumns from 'components/templates/TwoColumns';
import SectionHeading from 'components/atoms/SectionHeading';
import IconInfo from 'components/atoms/IconInfo';
import TextBox from 'components/molecules/TextBox';
import useBrowser from 'hooks/useBrowser';
import { breakpoint } from 'breakpoints';
import { sectiontitles } from 'assets/data/sectiontitles';
import { aboutPage } from 'assets/data/aboutPage';
import { aboutPageIcons } from 'assets/data/aboutPageIcons';
import SwiperAbout from 'components/organisms/SwiperAbout';

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
  transform: rotate(45deg);
  height: 2rem;
  margin: 0 auto;
`;

const AboutPage = () => {
  const isBrowser = useBrowser();
  const { locale } = useRouter();
  const title = sectiontitles?.[2]?.title?.[locale];

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
            <TextBox data={aboutPage} triangle />
            <StyledColumn></StyledColumn>
          </StyledTwoColumns>
          <StyledCarouselContainer id="swiper">
            {isBrowser ? (
              <>
            <SwiperAbout slides={aboutPageIcons} />
            <Arrows src="/arrows.svg" />
            </>
            ) : (
              <>
                {aboutPageIcons?.map(({ id, icon, title, content }, index) => (
                  <IconInfo
                    inSwiper
                    forceMargins
                    key={id}
                    title={title}
                    content={content}
                    icon={index + 1}
                  />
                ))}
              </>
            )}
          </StyledCarouselContainer>
        </Wrapper>
      </main>
    </>
  );
};

export default AboutPage;
