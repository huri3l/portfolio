import { AboutMe } from '@/components/Home/AboutMe';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | Huriel</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!"
        />
      </Head>
      <div>
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
