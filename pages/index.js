import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from 'components/organisms/Header';
import RecentProjectsCube from 'components/organisms/RecentProjectsCube';
import AboutHome from 'components/organisms/AboutHome';
import ScopeHome from 'components/organisms/ScopeHome';
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
        <ScopeHome />
      </main>
    </>
  );
};

export default HomePage;
