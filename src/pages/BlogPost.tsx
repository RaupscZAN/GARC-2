import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { getPostBySlug, Post } from '../lib/supabase';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      loadPost(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - GARC Blog`;
    }
  }, [post]);

  const loadPost = async (postSlug: string) => {
    try {
      const data = await getPostBySlug(postSlug);
      setPost(data);
    } catch (error) {
      console.error('Error loading post:', error);
      setError('Post not found');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-app-text-muted">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-app-text mb-4">Post Not Found</h1>
          <p className="text-app-text-muted mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Button to="/blog" variant="primary" icon={<ArrowLeft size={18} />}>
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        {post.image_url ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${post.image_url}")` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        )}
        
        <div className="container mx-auto px-4 text-center relative z-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="text-white font-medium">GARC Blog</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(post.published_at || post.created_at)}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button
                to="/blog"
                variant="outline"
                icon={<ArrowLeft size={18} />}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Back to Blog
              </Button>
              <Button
                onClick={sharePost}
                variant="outline"
                icon={<Share2 size={18} />}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="text-app-text leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">
            <span className="text-app-text">Interested in </span>
            <span className="text-primary">Learning More?</span>
          </h2>
          <p className="text-xl text-app-text-muted mb-8">
            Explore more insights from the GARC ecosystem or get in touch with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              to="/blog"
              variant="primary"
            >
              Read More Articles
            </Button>
            <Button
              to="/contact"
              variant="outline"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogPost;