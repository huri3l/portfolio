import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Hello World com Next.js</h1>
      <Link href="/contatos">Ir para a Página Contatos</Link>
    </main>
  );
}

export default Home;
