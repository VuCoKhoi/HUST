import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core/styles';
import Router from 'next/router';
import NProgress from 'nprogress';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import getLocale from '../utils/getLocale';
import ContextProvider from '../context_api';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, initLocale }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>KHOIVC - IMAGE</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ContextProvider initLocale={initLocale}>
          <Component {...pageProps} />
        </ContextProvider>
        <style>
          {`
        
          body{
            background-color: white
          }
          *::-webkit-scrollbar {
            width: 8px;
          }

          *::-webkit-scrollbar:horizontal {
            height: 6px;
          }

          /* Handle */
          *::-webkit-scrollbar-thumb {
            background: rgba(116, 129, 149, 0.6);
            border-radius: 10px;
            min-height: 10px;
          }
        `}
        </style>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const initLocale = await getLocale(ctx);

  return { pageProps, initLocale };
};

export default MyApp;
