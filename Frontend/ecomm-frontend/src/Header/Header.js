import React from 'react';
import './Header.css';

function Header() {
  return <div className='Header'>
      {/* Aditya add your code here  */}

    <header>
        <h1>Tech-Buy</h1>
    </header>
    <div id="space"></div>
    
    <nav>
        <span className="opts">
            <a href="#" target="_blank" >SignIn or Register</a>
        </span>
        <span>
            <input type="search" placeholder="Search Here"/>
            <a href="#" target="_blank"><input id="srch" type="submit" value="Go"/></a>
        </span>
        <span className="opts">
            <a href="#" target="_blank">Cart&#128722;</a>
        </span>
    </nav>
     
      {/* Aditya add your code here  */}
  </div>;
}

export default Header;
