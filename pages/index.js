import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from 'components/organisms/Header';
import RecentProjectsCube from 'components/organisms/RecentProjectsCube';
import AboutHome from 'components/organisms/AboutHome';
import SolutionExamples from 'components/organisms/SolutionExamples';
import Contact from 'components/organisms/Contact';

const HomePage = () => {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>DEVDEFER | HOME</title>
        <meta
          name="description"
          content="opis, który będize w 2 językach zależnie od locale"
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
