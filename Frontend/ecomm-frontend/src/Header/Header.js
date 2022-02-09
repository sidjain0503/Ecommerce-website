import React from 'react';
import './Header.css';

function Header() {
  return <div>
      {/* Aditya add your code here  */}

      <header>
        <h1>Tech-Buy</h1>
            <span>
                <input type="search" placeholder="Search Here"/>
                <a href="#" target="_blank"><input id="srch" type="submit" value="Search "/></a>
            </span>
            <span className="opts">
                🇮🇳
                <select className="ctg" name="ctg" id="ctg">
                    <option value="">Language</option>
                    <option value="">English</option>
                    <option value="">Hindi</option>
    
                </select>
            </span>
            <span className="opts">
                <a href="#" target="_blank">Account & List</a>
            </span>
            <span className="opts">
                <a href="#" target="_blank">Cart &#128722;</a>
            </span>
    </header>
    
    <nav>
            <a href="#">All</a>
            <a href="#">Today's Deal</a>
            <a href="#">Mobiles</a>
            <a href="#">Electornics</a>
            <a href="#">Fashion</a>
            <a href="#">Books</a>
            <a href="#">Home & Kitchen</a>
            <a href="#">Toys & Games</a>
            <a href="#">Others</a>
    
    </nav>


     
      {/* Aditya add your code here  */}
  </div>;
}

export default Header;
