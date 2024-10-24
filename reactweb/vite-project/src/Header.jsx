import { Link } from "react-router-dom";
const Header = () => {
    const headerStyle = {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '1rem 0',
      textAlign: 'center',
      width: '100%', // Ensuring full width
      boxSizing: 'border-box', // Include padding in width calculation
    };
  
    const h1Style = {
      margin: 0,
      fontSize: '2.5rem',
    };
  
    const navItemStyle = {
      display: 'inline-block',
      margin: '0 15px',
    };
  
    const navLinkStyle = {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.1rem',
    };
  
    return (
      <header style={headerStyle}>
        <h1 style={h1Style}>Welcome to My Blog</h1>
        <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={navItemStyle}>
                <Link style={navLinkStyle} to="/home">Home</Link>
            </li>
            <li style={navItemStyle}>
                <Link style={navLinkStyle} to="/about">About</Link>
            </li>
            <li style={navItemStyle}>
                 <Link style={navLinkStyle} to="/contact">Contact</Link>
            </li>
        </ul>

        </nav>
      </header>
    );
  };
  
  export default Header;
  