import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return <div className='Header'>
      {/* Aditya add your code here  */}

   
     <Link to="/" className='link'>
     <header>
         <h1>Tech-Buy</h1>
    </header>

         </Link>   
    <div id="space"></div>
    
    <nav>
        <span className="opts">
            <Link to="/loginSignup"  >SignIn or Register</Link>
        </span>
        <span>
            <input type="search" placeholder="Search Here"/>
            <a href="#" target="_blank"><input id="srch" type="submit" value="Go"/></a>
        </span>
        <span className="opts">
            <Link to='/cart'>Cart&#128722;</Link>
        </span>
    </nav>
     
      {/* Aditya add your code here  */}
  </div>;
}

export default Header;
