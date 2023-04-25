import Head from 'next/head';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '500', subsets: ['latin'] });

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Huriel</title>
      </Head>
      <div className="text-center mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="flex flex-col space-y-8 md:space-y-4">
          <span>Oops, não conseguimos encontrar essa página!</span>
          <span>Clique no botão abaixo para ser redirecionado à Página Inicial.</span>
        </p>
        <Link href="/">
          <button
            className={`${roboto.className} p-4 bg-h-blue-500 rounded-xl text-black font-bold mt-5 md:mt-12`}
          >
            Voltar para a Página Inicial
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
