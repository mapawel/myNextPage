import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import { breakpoint } from 'breakpoints';
import Button from 'components/atoms/Button';
import ButtonLink from 'components/atoms/ButtonLink';
import { projects } from 'assets/data/projects';
import { uiSubs } from 'assets/data/uiSubs';
import Rect from 'components/atoms/Rect';
import Image from 'next/image';
import ImageModal from 'components/organisms/ImageModal';
import { useImageModal } from 'hooks/useImageModal';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
`;

const StyledButton = styled(Button)`
  margin: 2rem 1rem 3rem;

  @media screen and (min-width: ${breakpoint.M}) {
    align-self: flex-start;
    font-size: ${({ theme }) => theme.fontSize.s};
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

const StyledButtonLink = styled(ButtonLink)`
  margin: 2rem 1rem 3rem;

  @media screen and (min-width: ${breakpoint.M}) {
    align-self: flex-start;
    font-size: ${({ theme }) => theme.fontSize.s};
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

const StyledImageBox = styled.div`
  margin-left: 0;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: ${breakpoint.L}) {
    width: 30%;
    flex-shrink: 0;
    margin-left: 6rem;
  }
`;

const StyledHeading = styled.h1`
  margin: 12rem 0 7rem;
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

const StyledSmallImg = styled.div`
  position: relative;
  margin: 2rem 0;
  width: 100%;
  height: 0;
  padding: 28% 0;
  > span {
    transform: translateY(-50%);
  }
  cursor: pointer;
  border: 1px solid black;

  ::before,
  ::after {
    position: absolute;
    opacity: 0;
    transition: opacity 0.15s;
  }

  ::before {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000d4;
  }

  ::after {
    content: 'click';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.color.textPrimary};
  }

  :hover {
    border: ${({ theme }) => `1px solid ${theme.color.textPrimary}`};

    ::before,
    ::after {
      opacity: 1;
    }
  }

  @media screen and (min-width: ${breakpoint.XS}) {
    width: 90%;
    padding: 25% 0;
  }

  @media screen and (min-width: ${breakpoint.S}) {
    width: 70%;
    padding: 19% 0;
  }

  @media screen and (min-width: ${breakpoint.M}) {
    width: 55%;
    padding: 15% 0;
  }

  @media screen and (min-width: ${breakpoint.L}) {
    width: 100%;
    padding: 28% 0;
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  height: 0;
  padding: 28% 0;
`;

const DetailProjectPage = ({ selectedProject }) => {
  const router = useRouter();
  const { locale, asPath } = router;
  // const { projectId } = useParams();
  const { openImage, closeImage, isModalOpen, imageUrl } = useImageModal();

  const stackList = useRef(null);
  const imagesBoxRef = useRef(null);

  const {
    images,
    live,
    detailProjectView: {
      title,
      techUsedList,
      descriptionsForProject,
      mainImage,
    },
  } = selectedProject;

  const handleBackClick = () => {
    router.push('/projects');
  };

  // useEffect(() => {
  //   gsap.fromTo(
  //     stackList.current.children,
  //     {
  //       x: '-=100',
  //       opacity: 0,
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 0.2,
  //       stagger: 0.05,
  //       scrollTrigger: {
  //         trigger: stackList.current,
  //         start: 'top 70%',
  //       },
  //     }
  //   );

  //   const imagesToAnim = gsap.utils.toArray(imagesBoxRef.current.children);
  //   imagesToAnim.forEach((child) => {
  //     gsap.fromTo(
  //       child,
  //       {
  //         x: '+=50',
  //         opacity: 0,
  //       },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.3,
  //         scrollTrigger: {
  //           trigger: child,
  //           start: 'top 70%',
  //         },
  //       }
  //     );
  //   });

  //   const descriptionsToAnim = gsap.utils.toArray('.descriptionToAnim');
  //   descriptionsToAnim.forEach((child) => {
  //     gsap.fromTo(
  //       child,
  //       {
  //         opacity: 0,
  //       },
  //       {
  //         opacity: 1,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: child,
  //           start: 'top 70%',
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>{headSubs?.projects?.title?.[locale]}</title>
        <meta
          name="description"
          content={headSubs?.projects?.description?.[locale]}
        />
      </Head>
      <main>
        <Wrapper as="section">
          <h1>{title}</h1>
          <h2>{asPath}</h2>
        </Wrapper>
      </main>
    </>
  );
};

export default DetailProjectPage;

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
