import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from 'components/organisms/Header';
import RecentProjectsCube from 'components/organisms/RecentProjectsCube';
import AboutHome from 'components/organisms/AboutHome';
import SolutionExamples from 'components/organisms/SolutionExamples';
import Contact from 'components/organisms/Contact';
import { headSubs } from 'assets/data/headSubs';

const HomePage = () => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{headSubs?.home?.title?.[locale]}</title>
        <meta
          name="description"
          content={headSubs?.home?.description?.[locale]}
        />
      </Head>
      <Header />
      <main>
        <RecentProjectsCube />
        <AboutHome />
        <SolutionExamples />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
