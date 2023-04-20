import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { Header, LoadingScreen } from '../components/';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  });

  return (
    <>
      {loading ? (
        <>
          <Header></Header>
          <Component {...pageProps} />
        </>
      ) : (
        <>
          <Head>
            <meta name="theme-color" content="hsl(210, 95%, 5%)" />
          </Head>
          <LoadingScreen />
        </>
      )}
    </>
  );
}
