import PostCard from '../components/PostCard';
import { posts } from '../lib/posts';

export default function HomePage() { 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}