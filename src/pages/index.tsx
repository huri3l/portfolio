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
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
