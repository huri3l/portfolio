import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export const Header = () => {
  return (
    <header
      className={`${roboto.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}
    >
      <Link href="/">
        <Image src="/icon.svg" width={55} height={55} alt="Ícone da letra H, Logo de Huriel" />
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link href="/">Sobre mim</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link
          href="/contatos"
          className="px-2 py-1.5 bg-h-gray-500 rounded-md text-white text-md transition-all hover:bg-opacity-80"
        >
          Entre em contato
        </Link>
      </nav>
    </header>
  );
};
