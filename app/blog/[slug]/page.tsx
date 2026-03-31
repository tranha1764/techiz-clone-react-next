import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/data/blog-posts';
import BlogCard from '@/components/BlogCard';

// Generate static params for all blog posts at build time
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Open Techiz Clone`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = getAllPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  // Simple markdown-like rendering (split by \n\n for paragraphs, ## for headings)
  const renderContent = (content: string) => {
    const blocks = content.split('\n\n');
    return blocks.map((block, index) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-text-primary mt-10 mb-2">
            {trimmed.slice(3)}
          </h2>
        );
      }
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-text-primary mt-8 mb-4">
            {trimmed.slice(4)}
          </h3>
        );
      }
      if (trimmed.match(/^\d+\.\s/)) {
        const items = trimmed.split('\n').filter(Boolean);
        return (
          <ol key={index} className="list-decimal list-inside space-y-3 mb-6 text-text-secondary">
            {items.map((item, i) => (
              <li key={i} className="leading-relaxed">{item.replace(/^\d+\.\s\*\*/, '').replace(/\*\*(.*)$/, '$1')}</li>
            ))}
          </ol>
        );
      }
      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').filter(Boolean);
        return (
          <ul key={index} className="space-y-3 mb-6">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary">
                <span className="text-accent-lime mt-0.5">•</span>
                <span className="leading-relaxed">{item.slice(2)}</span>
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-text-secondary leading-relaxed mb-5">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <>
      {/* Article Header */}
      <section className="relative" id="blog-post-header">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 glow-bg-blue opacity-20 pointer-events-none" />
        <div className="container-custom py-24 md:py-36 relative">
          {/* Breadcrumb */}
          <div className="mb-10">
            <Link href="/" className="text-text-muted text-sm hover:text-text-primary transition-colors">Home</Link>
            <span className="text-text-muted text-sm mx-2">›</span>
            <Link href="/blog" className="text-text-muted text-sm hover:text-text-primary transition-colors">Blog</Link>
            <span className="text-text-muted text-sm mx-2">›</span>
            <span className="text-text-secondary text-sm">{post.category}</span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-5">
            <span className="tag text-xs">{post.category}</span>
            <span className="text-text-muted text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-8 max-w-3xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-text-muted">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-bg-secondary pt-24 pb-16 md:pt-6 md:pb-16" id="blog-post-content">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20">
            {/* Main Content */}
            <article className="lg:col-span-3 max-w-none">
              <div className="card p-8 md:p-12">
                {renderContent(post.content)}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Back to Blog */}
                <Link
                  href="/blog"
                  className="btn-outline w-full justify-center text-sm"
                >
                  ← Back to Blog
                </Link>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-5 uppercase tracking-wider">
                      Related Posts
                    </h3>
                    <div className="space-y-5">
                      {relatedPosts.map((rp) => (
                        <BlogCard key={rp.slug} post={rp} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
