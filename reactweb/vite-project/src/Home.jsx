import React from 'react';

const Home = () => {
  const mainStyle = {
    padding: '2rem',
    backgroundColor: 'white',
    margin: '2rem auto',
    maxWidth: '800px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const articleStyle = {
    marginBottom: '2rem',
  };

  const headingStyle = {
    marginTop: '0',
    fontSize: '2rem',
    color: '#007bff',
  };

  const containerStyle = {
    fontFamily: 'Open Sans, sans-serif',
    margin: '',
    padding: '0',
    backgroundColor: '#f4f4f4',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <main style={mainStyle} className="container my-5">
        <article style={articleStyle} className="mb-4">
          <h2 style={headingStyle}>First Blog Post</h2>
          <p>This is the content of my first blog post. Here, I share my thoughts on various topics that interest me. Stay tuned for more updates!</p>
        </article>
        <article style={articleStyle} className="mb-4">
          <h2 style={headingStyle}>Second Blog Post</h2>
          <p>This is the content of my second blog post. I continue to delve into subjects that fascinate me and hope to engage with my readers.</p>
        </article>
      </main>
    </div>
  );
};

export default Home;
