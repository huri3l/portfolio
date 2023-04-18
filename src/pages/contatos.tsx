import Head from 'next/head';

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | Huriel</title>
      </Head>
      <div>
        <h1>Contatos</h1>
        <ul>
          <li>
            <span>E-mail</span>
            <div>
              <a href="mailto:huriel-lopes@outlook.com">huriel-lopes@outlook.com</a>
            </div>
          </li>
          <li>
            <span>LinkedIn</span>
            <div>
              <a href="https://www.linkedin.com/in/huri3l/">https://www.linkedin.com/in/huri3l/</a>
            </div>
          </li>
          <li>
            <span>GitHub</span>
            <div>
              <a href="https://github.com/huri3l">https://github.com/huri3l</a>
            </div>
          </li>
          <li>
            <span>YouTube</span>
            <div>
              <a href="https://www.youtube.com/Huriel">https://www.youtube.com/Huriel</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contatos;
