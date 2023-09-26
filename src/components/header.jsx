// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Import the CSS file for styling (make sure to adjust the path as needed)
import '../style/header.css';

// Import the image for the logo (adjust the path accordingly)
import ElSol from "../img/elSolpng.png"

// Define a functional component named Header
function Header() {
  // Use the 'useState' hook to manage the 'menuOpen' state
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state (open/close)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Render the header component
  return (
    <header>
      <nav>
        <div className='divContainer'>
          {/* Display the logo */}
          <img 
            className='logo'
            src={ElSol}
            alt="Logo"    
          />
        </div>
        
        {/* Button to toggle the menu on smaller screens */}
        <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
        </button>

        {/* Main menu */}
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Topics</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" className="login-button">Log In</a></li>
          <li><a href="#" className="signup-button">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Export the Header component as the default export
export default Header;
