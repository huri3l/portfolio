import { CopyButton } from '@/components/commons/CopyButton';
import Head from 'next/head';

interface ContatosProps {
  contacts: {
    name: string;
    link: string;
    isMail?: boolean;
  }[];
}

const Contatos = ({ contacts }: ContatosProps) => {
  console.log(contacts);

  return (
    <>
      <Head>
        <title>Contatos | Huriel</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
        <ul className="table mx-auto space-y-6 md:space-y-8">
          {contacts.map(({ link, name, isMail }, idx) => (
            <li key={name + idx}>
              <span className="font-bold">{name}</span>
              <div className="flex gap-1 md:gap-3 items-center">
                <a
                  href={isMail ? `mailto:${link}` : link}
                  target="_blank"
                  className="text-sm md:text-lg text-slate-300 underline truncate"
                >
                  {link}
                </a>
                {isMail && <CopyButton textToCopy={link} />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const loadContacts = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/huri3l/2b64cb37a94a46c7b97c4c4a51ff5439/raw/fa574847dd9a99a740e31b84e06d770def1364ab/contact.json',
  );
  const data = res.json();

  return data;
};

export const getServerSideProps = async () => {
  const contacts = await loadContacts();

  return {
    props: {
      contacts,
    },
  };
};

export default Contatos;
