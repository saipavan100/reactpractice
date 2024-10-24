import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#6c757d',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
  };

  return (
    <div>
      <footer style={footerStyle}>
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
