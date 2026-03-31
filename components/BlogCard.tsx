import Link from 'next/link';
import type { BlogPost } from '@/data/blog-posts';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="card group block" id={`blog-card-${post.slug}`}>
      {/* Category + Read Time */}
      <div className="flex items-center gap-3 mb-4">
        <span className="tag text-xs">{post.category}</span>
        <span className="text-text-muted text-xs">{post.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-lime transition-colors leading-snug">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-text-muted">
        <span>{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </div>
    </Link>
  );
}
