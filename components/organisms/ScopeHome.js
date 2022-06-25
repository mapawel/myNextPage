import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import List from 'components/molecules/List';
import BottomButtons from 'components/molecules/BottomButtons';
import { sectiontitles } from 'assets/data/sectiontitles';
import { solutionExamples } from 'assets/data/solutionExamples';
import { uiSubs } from 'assets/data/uiSubs';
import sectionHeadingAnim from 'gsapanims/sectionHeadingAnim';

const ScopeHome = () => {
  const { locale } = useRouter();

  const headingRef = useRef(null);
  const title = sectiontitles?.[3]?.title?.[locale];
  const sectionId = sectiontitles?.[3]?.titleMenuId;

  useEffect(() => {
    sectionHeadingAnim(headingRef.current);
  }, []);

  return (
    <Wrapper as="section" id={sectionId}>
      <SectionHeading ref={headingRef}>{title}</SectionHeading>
      <List
        nr={1}
        title={solutionExamples?.title?.[locale]}
        content={solutionExamples?.listed}
      />
      <BottomButtons
        noDecoration
        linkOne={{
          href: '/projects',
          label: uiSubs?.ourProjects,
        }}
        linkTwo={{
          href: '/solutions',
          label: uiSubs?.ourSolutions,
        }}
      />
    </Wrapper>
  );
};

export default ScopeHome;
