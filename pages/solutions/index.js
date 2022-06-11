import Head from 'next/head';
import { useRouter } from 'next/router';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import SectionHeading from 'components/atoms/SectionHeading';
import Contact from 'components/organisms/Contact';
import routes from 'routes';
import BottomButtons from 'components/molecules/bottomButtons';
import { uiSubs } from 'assets/data/uiSubs';

const SolutionsPage = () => {
  const { locale } = useRouter();
  const title = routes?.[3]?.name?.[locale];

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
          <BottomButtons
            linkOne={{
              href: '/',
              label: uiSubs?.home,
            }}
            linkTwo={{
              href: '/about',
              label: uiSubs?.about,
            }}
          />
        </Wrapper>
      </main>
    </>
  );
};

export default SolutionsPage;
