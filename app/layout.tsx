import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import Footer from '@/components/Footer';


const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Meu Cantinho ✨',
  description: 'Um blog para inspiração feminina.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="bg-background text-text-base w-full flex flex-col min-h-screen">
        <header className="bg-card-bg border-b border-border" style={{ height: '65px' }}>
          <div className="container mx-auto max-w-5xl flex justify-around items-center h-full">
            <Link
              href="/"
              style={{ fontSize: '1.2rem' }}
              className="font-bold text-primary hover:text-primary-hover transition-colors no-underline"
            >
              ✨ Meu Cantinho
            </Link>

            <nav>
              <ul className="list-none flex">
                <li>
                  <Link
                    href="/"
                    style={{ fontSize: '1rem', marginRight: '1rem' }}
                    className="text-text-base hover:text-primary transition-colors no-underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    style={{ fontSize: '1rem' }}
                    className="text-text-base hover:text-primary transition-colors no-underline"
                  >
                    Sobre
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

       <main className="container mx-auto flex-1 mt-10 p-4 md:p-6 flex flex-col"> 
  {children}
</main>
        <br />
        <Footer />

      </body>
    </html>
  );
}