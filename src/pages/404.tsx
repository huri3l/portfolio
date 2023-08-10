import Head from 'next/head';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Huriel</title>
      </Head>
      <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 px-6 md:px-32">
        <h1 className="text-5xl sm:text-7xl font-bold">404</h1>
        <p className="flex flex-col gap-8 md:gap-4 md:text-xl">
          <span>Oops, não conseguimos encontrar essa página!</span>
          <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>
        </p>
        <Link
          href="/"
          className={`${roboto.className} p-4 bg-h-blue-500 rounded-xl text-black mt-5 md:mt-12 md:text-xl w-fit`}
        >
          Ir para a Página Inicial
        </Link>
      </div>
    </>
  );
};

export default NotFound;
