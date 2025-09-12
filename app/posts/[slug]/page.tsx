import { notFound } from 'next/navigation';
import { posts } from '@/lib/posts';
import LikeButton from '@/components/LikeButton';
import CommentForm from '@/components/CommentForm'; 

interface PostPageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: PostPageProps) {  
  const { slug } = await params;

  // Garante que o slug é uma string válida
  if (typeof slug !== 'string') {
    console.error('[PostPage] Invalid slug received:', slug);
    notFound();
  }

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    console.warn(`[PostPage] Post with slug "${slug}" not found.`);
    notFound();
  }

  return (
    <article className="bg-card-bg text-center shadow-lg-pink border border-border w-3/5 mx-auto post-card" style={{ padding: '2rem', marginTop: '2rem', marginBottom: '2rem' }}>
      
      <h1 className="font-bold font-playfair text-lilac-dark text-center">{post.title}</h1>

      <p className="text-primary  text-center" style={{ fontSize: '0.8rem' }}>
        Por {post.author} - {post.date}
      </p>
      
      <div
        className="text-lilac-dark" style={{ margin: '1rem' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Seção do LikeButton */}
      <div className="mt-12 pt-8 mb-10 border-t border-border text-center">
        <h2 className="text-2xl font-semibold font-playfair text-lilac-dark mb-4">Gostou deste cantinho?</h2>
        <div className="flex justify-center">
          <LikeButton postId={String(post.postId)} />
        </div>
      </div>

 {/* Seção de Comentários */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold font-playfair text-lilac-dark mb-4 text-center">
          Comentários
        </h2>
        <p className="text-text-base text-center">
          Deixe o seu comentário abaixo.
        </p>
        <CommentForm postId={String(post.postId)} /> 
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  // Filtra posts para garantir que todos tenham um slug válido (string não vazia)
  const validPosts = posts.filter(post => typeof post.slug === 'string' && post.slug);

  const generatedSlugs = validPosts.map((post) => ({
    slug: post.slug,
  }));

  return generatedSlugs;
}

