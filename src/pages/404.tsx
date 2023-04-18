import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Huriel</title>
      </Head>
      <div>
        <h1>404</h1>
        <div>
          <p>Oops, não conseguimos encontrar essa página!</p>
          <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>
        </div>
        <Link href="/">Ir para a Página Inicial</Link>
      </div>
    </>
  );
};

export default NotFound;
