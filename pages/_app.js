import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import { Header, LoadingScreen } from '../components/';

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
        <LoadingScreen />
      )}
    </>
  );
}
