import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import type { Page } from '../types/page';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

// this should give a better typing
type Props = AppProps & {
  Component: Page;
};

// Use of the <SessionProvider> allows us to call useSession() globally and access the session object

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>{' '}
    </SessionProvider>
  );
};

export default MyApp;
