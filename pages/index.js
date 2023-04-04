import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Intro, About, Skills, Projects, Contact } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joseph's Portfolio</title>
        <meta name="description" content="Joseph Oritseweyinmi's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="hsl(210, 95%, 5%)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
