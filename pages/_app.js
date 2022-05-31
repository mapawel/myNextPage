import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyle'
import { theme } from 'themes/theme';
import Layout from 'layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
