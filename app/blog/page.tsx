import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/data/blog-posts';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blog | Open Techiz Clone',
  description: 'Insights on AI, SaaS, ecommerce, and engineering from the Open Techiz team.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Hero */}
      <section className="relative" id="blog-hero">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 glow-bg-blue opacity-30 pointer-events-none" />
        <div className="container-custom py-16 md:py-24 relative">
          <Link href="/" className="text-text-muted text-sm hover:text-text-primary transition-colors">Home</Link>
          <span className="text-text-muted text-sm mx-2">›</span>
          <span className="text-text-secondary text-sm">Blog</span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mt-8 mb-8">
            Insights & Engineering<br />
            <span className="text-accent-lime">Knowledge</span>
          </h1>

          <p className="text-text-secondary text-lg max-w-2xl mb-8">
            Deep dives into AI, SaaS architecture, ecommerce engineering, and the technologies
            we use to build scalable digital products.
          </p>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 mt-4 mb-6">
            <span className="tag border-accent-lime text-accent-lime">All</span>
            {categories.map((cat) => (
              <span key={cat} className="tag">{cat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-bg-secondary pt-24 pb-16 md:pt-6 md:pb-12" id="blog-grid">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
