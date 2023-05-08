import Link from 'next/link';

export const AboutMe = () => {
  return (
    <main>
      <div>
        <h1>Prazer, sou &nbsp;</h1>
        <span>Huriel</span>
        <div>
          <h2>
            Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!
          </h2>
          <Link href="/contatos">Converse comigo!</Link>
        </div>
        <ul>
          <li style={{ backgroundColor: '#2F74C0', color: '#FFFFFF' }}>typescript</li>
          <li style={{ backgroundColor: '#6BDDFA', color: '#000000' }}>react</li>
          <li style={{ backgroundColor: '#EFD81D', color: '#000000' }}>javascript</li>
          <li style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>next.js</li>
        </ul>
      </div>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/61247833?v=4"
          alt="Foto de Perfil de Huriel. Homem caucasiano, cabelo castanho e um sorriso enorme no rosto"
        />
        <p>
          <span>2+</span>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
};
