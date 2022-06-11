import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { headSubs } from 'assets/data/headSubs';
import Wrapper from 'components/templates/Wrapper';
import TwoColumns from 'components/templates/TwoColumns';
import SectionHeading from 'components/atoms/SectionHeading';
import Rect from 'components/atoms/Rect';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import { breakpoint } from 'breakpoints';
import Contact from 'components/organisms/Contact';
import routes from 'routes';
import BottomButtons from 'components/molecules/bottomButtons';
import { uiSubs } from 'assets/data/uiSubs';

const AboutPage = () => {
  const { locale } = useRouter();
  const title = routes?.[4]?.name?.[locale];

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
          <Contact />
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

export default AboutPage;
