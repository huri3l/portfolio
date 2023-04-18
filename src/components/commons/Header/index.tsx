import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src="/icon.svg" width={55} height={55} alt="Ícone da letra H, Logo de Huriel" />
      </Link>
      <nav>
        <Link href="/">Sobre mim</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contatos">Entre em contato</Link>
      </nav>
    </header>
  );
};
