export default function AboutPage() {
  return (
    <>
      <br />
      <div className="bg-card-bg border border-border shadow-lg-pink max-w-3xl mx-auto flex-1 about-card">

        <h1 className="font-serif text-4xl font-bold text-lilac-dark mb-6 text-center">
          Sobre Mim
        </h1>

        {/* Parágrafos */}
        <div className="m-1" style={{ fontSize: '1rem', margin: '2rem' }}>
          <p className="text-text-base text-center">
            Olá, leitora querida! Este é o meu pequeno refúgio digital, um espaço onde compartilho
            minhas paixões, pensamentos e descobertas.
          </p>
          <p className="text-text-base text-center">
            Eu acredito na beleza das coisas simples e na força que encontramos no autocuidado e na inspiração diária.
          </p>
          <p className="text-text-base text-center">
            Sou uma eterna sonhadora e adoro criar. Este blog é um projeto que nasceu do desejo de
            compartilhar um pouco do meu universo com você.
          </p>
          <p className="text-text-base text-center">
            Espero que encontre aqui um lugar para se inspirar e se sentir acolhida. ✨
          </p>
        </div>
        <div className="my-10 p-6 bg-background border border-border shadow-md text-center">
          <h3 className="font-serif font-semibold text-primary" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Coisas que me inspiram
          </h3>
          <ul className="text-text-base list-none" style={{ fontSize: '1rem', margin: '2rem' }}>
            <li>📚 Mergulhar em um bom livro</li>
            <li>💻 Explorar o universo da programação e da computação em nuvem</li>
            <li>🎬 Maratonar doramas e animes</li>
            <li>🍓 Cuidar da minha fazendinha em Stardew Valley</li>
          </ul>
        </div>

        {/* Seção de Contato */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <h2 className="font-serif font-semibold text-lilac-dark">
            Vamos nos Conectar?
          </h2>
          <ul className="text-text-secondary list-none" style={{ fontSize: '0.8rem', margin: '2rem' }}>
            <li>
              Email: <a href="mailto:ingridmoitinho@gmail.com" className="font-semibold text-primary hover:text-primary-hover transition-colors hover:underline">
                ingridmoitinho@gmail.com
              </a>
            </li>
            <li>
              Instagram: <a href="https://instagram.com/guiids" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary-hover transition-colors hover:underline">
                @guiids
              </a>
            </li>
            <li>
              LinkedIn: <a href="https://www.linkedin.com/in/ingridmoitinho/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-primary-hover transition-colors hover:underline">
                @ingridmoitinho
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}