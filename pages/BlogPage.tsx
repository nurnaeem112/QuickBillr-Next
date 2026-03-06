import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
            QuickBillr <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">Insights</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Tips, guides, and stories to help you manage your business billing more effectively.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 dark:bg-gray-800 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-700 dark:bg-gray-900/90 dark:text-primary-400">
                  {post.readTime}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-primary-600 font-medium mb-2 dark:text-primary-400">{post.date}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 dark:text-gray-300">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs dark:bg-primary-900/30 dark:text-primary-400">
                      {post.author.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">{post.author}</p>
                  </div>
                  <div className="ml-auto text-primary-600 flex items-center text-sm font-medium">
                    Read more 
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;