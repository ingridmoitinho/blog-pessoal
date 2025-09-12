import Link from 'next/link';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface Post {
  slug: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  date?: string;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <>
      <br />
      <div className="max-w-md h-full group">
        <Link href={`/posts/${post.slug}`} className="no-underline ">
          <div className="bg-card-bg mx-auto border min-h-[220px] w-1/2 border-border shadow-lg-pink hover:shadow-xl-pink p-6 h-full flex gap-4 post-card">

            {/* Imagem do Post */}
            <div className="relative w-1/2 imagem-card border-border overflow-hidden flex-shrink-0">
              <Image
                src={post.imageUrl}
                alt={`Imagem do post: ${post.title}`}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Conteúdo de Texto e Botão */}
            <div className="flex flex-col flex-grow">
              <div>
                <h2 className="text-lilac-dark font-serif text-xl font-bold text-center">
                  {post.title}
                </h2>

                {post.date && (
                  <p className="text-primary text-xs text-center" style={{ fontSize: '0.8rem' }}>
                    {post.date}
                  </p>
                )}

                <p className="text-text-base text-sm text-center">
                  {post.description}
                </p>
              </div>

              <div className="flex justify-center mt-4 w-full">
                <div
                  className="bg-lilac-dark text-white no-underline font-semibold py-2 px-4 rounded-full w-2/6 hover:bg-lilac-dark-hover transition-colors flex justify-center items-center card-botton"
                >
                  Ler mais ⮞
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}