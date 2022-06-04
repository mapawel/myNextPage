import { useEffect, useState } from 'react';
import Head from 'next/head';
import Menu from 'components/organisms/Menu';
import Footer from 'components/organisms/Footer';
// import Mainconsents from 'components/molecules/MainConsents';
import useMainConsents from 'hooks/useMainConsents';

const style = {
  overflow: 'hidden',
  position: 'relative',
  zIndex: '0',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
};

const Layout = ({ children }) => {
  const { handleAccept, isAccepted } = useMainConsents();

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16-16.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <div style={style}>
        <>
          <Menu />
          {children}
          <Footer />
          {/*{!isAccepted && <Mainconsents onClick={handleAccept} />} */}
        </>
      </div>
    </>
  );
};

export default Layout;
