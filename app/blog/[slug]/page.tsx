import { blogPosts } from '../../../data/blogPosts';
import BlogLayout from '../../../components/BlogLayout';
import { Metadata } from 'next';
import React from 'react';
import JsonLd from '../../../components/JsonLd';

// This is a generic blog post page that uses the content from blogPosts.ts
// We will later override this for specific posts that have custom JSX.
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <p className="mt-4">Sorry, the blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.description,
          "image": post.imageUrl,
          "datePublished": post.date, // Assuming date is in a parseable format or ISO
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "QuickBillr",
            "logo": {
              "@type": "ImageObject",
              "url": "https://quickbillr.online/icon.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://quickbillr.online/blog/${slug}`
          }
        }}
      />
      <BlogLayout post={post} />
    </>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}
