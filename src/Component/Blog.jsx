import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
      date: 'March 15, 2024',
      author: 'Your Name',
      category: 'Tutorial',
      image: 'https://via.placeholder.com/400x250',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Best Practices for Responsive Design',
      excerpt: 'Discover the essential techniques for creating websites that look great on any device.',
      date: 'March 10, 2024',
      author: 'Your Name',
      category: 'Design',
      image: 'https://via.placeholder.com/400x250',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Node.js Performance Optimization',
      excerpt: 'Tips and tricks to make your Node.js applications faster and more efficient.',
      date: 'March 5, 2024',
      author: 'Your Name',
      category: 'Backend',
      image: 'https://via.placeholder.com/400x250',
      readTime: '10 min read'
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-footer">
                  <span className="blog-author">By {post.author}</span>
                  <a href="#" className="read-more">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="view-all-container">
          <a href="#" className="btn view-all-btn">View All Posts</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;