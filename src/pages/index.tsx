import { AboutMe } from '@/components/Home/AboutMe';
import { Projects } from '@/components/Home/Projects';
import Head from 'next/head';

const Home = () => {
  const projects = [
    {
      slug: 'natura-whitelabel',
      name: 'Natura Whitelabel',
      image: {
        url: 'https://i.imgur.com/BSphXgc.png',
        alt: 'Página Inicial do Site da Natura Brasil',
      },
    },
    {
      slug: 'blobg',
      name: 'Blob.g',
      image: {
        url: 'https://i.imgur.com/Fdl3Lnp.png',
        alt: 'Blob.g, notícias do mundo dos códigos',
      },
    },
    {
      slug: 'userdash',
      name: 'UserDash',
      image: {
        url: 'https://i.imgur.com/bViAwow.png',
        alt: 'UserDash, dashboard de usuários. Página inicial contendo uma opção para filtrar os usuários ou criar, além de um usuário de exemplo. O usuário de exemplo é Huriel Ferreira Lopes, e-mail: huriel.lopes@exampl.com, celular: 99 99999-9999, país: Brasil, estado: Rio Grande do Sul, enderaço: Rua dos Dados Falsos, 4',
      },
    },
    {
      slug: 'videoteca',
      name: 'Videoteca',
      image: {
        url: 'https://i.imgur.com/wuTKxK9.png',
        alt: 'Videoteca, aplicativo para salvar vídeos',
      },
    },
  ];

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
        <Projects projects={projects} />
      </div>
    </>
  );
};

export default Home;
