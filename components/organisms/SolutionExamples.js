import { useRouter } from 'next/router';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import List from 'components/molecules/List';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { sectiontitles } from 'assets/data/sectiontitles';
import { solutionExamples } from 'assets/data/SolutionExamples';

gsap.registerPlugin(ScrollTrigger);

const SolutionExamples = () => {
  const { locale } = useRouter();

  const title = sectiontitles?.[3]?.title?.[locale];
  const sectionId = sectiontitles?.[locale]?.[3]?.titleMenuId;

  return (
    <section id={sectionId}>
      <Wrapper>
        <SectionHeading>{title}</SectionHeading>
        <List
          nr={1}
          title={solutionExamples?.title?.[locale]}
          content={solutionExamples?.listed}
        />
      </Wrapper>
    </section>
  );
};

export default SolutionExamples;
