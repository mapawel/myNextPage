import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import { breakpoint } from 'breakpoints';
import ButtonLink from 'components/atoms/ButtonLink';
import { projects } from 'assets/data/projects';
import { uiSubs } from 'assets/data/uiSubs';
import Rect from 'components/atoms/Rect';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { pageTites } from 'assets/data/pageTitles';
import BottomButtons from 'components/molecules/BottomButtons';
import Paragraph from 'components/atoms/Paragraph';

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const StyledRect = styled(Rect)`
  position: absolute;
  width: 40rem;
  height: 40rem;
  top: -20%;
  left: -10%;
  transform: rotate(10deg);

  @media screen and (min-width: ${breakpoint.M}) {
    width: 60rem;
    height: 60rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 75rem;
    height: 75rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
  }
`;

const StyledButtonLink = styled(ButtonLink)`
  margin: 2rem 1rem 3rem;

  @media screen and (min-width: ${breakpoint.M}) {
    align-self: flex-start;
    padding: 2.5rem 3rem;
    margin-left: 6rem;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    margin-left: 11rem;
  }

  @media screen and (min-width: ${breakpoint.XL}) {
    margin-left: 15rem;
  }
`;

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  @media screen and (min-width: ${breakpoint.L}) {
    flex-direction: row;
  }
`;

const StyledBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 4rem 0;

  @media screen and (min-width: ${breakpoint.L}) {
    margin: 9rem 0;
  }
`;

const StyledHeading = styled.h1`
  margin: 0 0 7rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.textSecondary};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StyledSubheading = styled.h2`
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.textPrimary};

  @media screen and (min-width: ${breakpoint.S}) {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-bottom: 5rem;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledParTitle = styled.h3`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.textPrimary};

  @media screen and (min-width: ${breakpoint.M}) {
    margin-bottom: 3rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledPar = styled.p`
  margin-left: 3rem;
  margin-bottom: 5rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledListContainer = styled.div`
  position: relative;
`;

const StyledList = styled.ul`
  list-style: square;
  list-style-position: inside;
  line-height: 1.5;
  margin-left: 3rem;
  margin-bottom: 7rem;
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media screen and (min-width: ${breakpoint.M}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const TechnicalDetailsPage = ({ selectedProject }) => {
  const router = useRouter();
  const { locale } = router;

  const stackList = useRef(null);

  const {
    slug,
    live,
    detailProjectView: { title },
    technicalDetailsView,
    technicalDetailsView: { techStact, techDescriptions } = {},
  } = selectedProject;

  useEffect(() => {
    if (technicalDetailsView) {
      gsap.fromTo(
        stackList.current.children,
        {
          x: '-=100',
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.2,
          stagger: 0.05,
          scrollTrigger: {
            trigger: stackList.current,
            start: 'top 70%',
          },
        }
      );

      const descriptionsToAnim = gsap.utils.toArray('.descriptionToAnim');
      descriptionsToAnim.forEach((child) => {
        gsap.fromTo(
          child,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: child,
              start: 'top 70%',
            },
          }
        );
      });
    }
  }, [technicalDetailsView]);

  return (
    <>
      <Head>
        <title>
          {headSubs?.projectDetailsTech?.title?.[locale] + title?.[locale]}
        </title>
        <meta
          name="description"
          content={
            headSubs?.projectDetailsTech?.description?.[locale] +
            title?.[locale]
          }
        />
      </Head>
      <main>
        <Wrapper as="section">
          <SectionHeading nomargin component="span">
            {pageTites?.projectTechnicalDetails?.[locale]}
          </SectionHeading>
          <StyledHeading>{title?.[locale]}</StyledHeading>

          {!technicalDetailsView ? (
            <Paragraph>Technical desription in preperation...</Paragraph>
          ) : (
            <>
              <StyledSubheading>{uiSubs?.techStack?.[locale]}</StyledSubheading>
              <StyledListContainer>
                <StyledList ref={stackList}>
                  {techStact?.[locale]?.map((techName, index) => (
                    <li key={techName + index}>{techName}</li>
                  ))}
                </StyledList>
                <StyledRect />
              </StyledListContainer>
              <StyledSubheading>
                {uiSubs?.description?.[locale]}
              </StyledSubheading>

              <StyledBox>
                <div>
                  {techDescriptions?.map(({ id, title, description }) => (
                    <div key={id} className="descriptionToAnim">
                      <StyledParTitle>{title?.[locale]}</StyledParTitle>
                      {description?.[locale]?.map((text, index) => (
                        <StyledPar key={text + index}>{text}</StyledPar>
                      ))}
                    </div>
                  ))}
                  <StyledBtnBox>
                    <StyledButtonLink
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {uiSubs?.live?.[locale]}
                    </StyledButtonLink>
                    <Link href={`/projects/${slug}`} passHref>
                      <StyledButtonLink>
                        {uiSubs?.projectDetails?.[locale]}
                      </StyledButtonLink>
                    </Link>
                  </StyledBtnBox>
                </div>
              </StyledBox>
            </>
          )}
          <BottomButtons
            linkOne={{
              href: '/',
              label: uiSubs?.home,
            }}
            linkTwo={{
              href: '/projects',
              label: uiSubs?.allProjects,
            }}
          />
        </Wrapper>
      </main>
    </>
  );
};

export default TechnicalDetailsPage;

export function getStaticPaths({ locales }) {
  let paths = [];

  projects.forEach(({ slug }) => {
    for (const locale of locales) {
      paths.push({
        params: { project: slug },
        locale,
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { project } = params || {};
  const selectedProject = projects.find(({ slug }) => slug === project);
  return {
    props: {
      selectedProject,
    },
  };
}
