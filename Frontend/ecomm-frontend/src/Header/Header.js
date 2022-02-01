import React from 'react';
import './Header.css';

function Header() {
  return <div>
      {/* Aditya add your code here  */

        <body>
        <nav>
            <div class="left dflex">
                <a href="#"><img src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" width="200px"/></a>
            <div class="item">
                <p>Hello,</p>
                <h5>enter your address</h5>
            </div>
            <div class="searchBox dflex">
                <div class="box">
                    <div class="dflex">
                        <button class="all" type="button">
                            All<i class="fa fa-sort-desc"></i>
                        </button>
                        <input type="text" name="" id=""/>
                        <button class="search" type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="right dflex">
                <div class="item">
                    <i class="fa fa-flag"></i><i class="fa fa-sort-desc"></i>
                </div>
                <div class="item">
                    <p>Hello,</p>
                    <h5>Account & Lists<i class="fa fa-sort-desc"></i></h5>
                </div>
                <div class="item">
                    <p>Refund</p>
                    <h5>& Order</h5>
                </div>
                <div class="item">
                    <i class="fa fa-cart-plus fa-2x"></i>Cart
                </div>
            </div>
            </div>
        </nav>
        <nav class="subnavigation">
            <ul class="submenu">
                <i class="fa fa-bars"></i>
                <a href="#"><li>All |</li></a>
                <a href="#"><li>Gift Card |</li></a>
                <a href="#"><li>Amazon Pay |</li></a>
                <a href="#"><li>Amazon Business<i class="fa fa-sort-desc"></i> |</li></a>
                <a href="#"><li>Pet Supplies |</li></a>
                <a href="#"><li>Kindle ebooks |</li></a>
                <a href="#"><li>User's Amazon |</li></a>
                <a href="#"><li>Gift Ideas |</li></a>
                <a href="#"><li>Video Games |</li></a>
                <a href="#"><li>AmazonBasics |</li></a>
                <a href="#"><li>Coupons</li></a>
            </ul>
            <ul>
                <a href="#">
                    <i class="fa fa-amazon bg"></i>
                    <li class="li">Shopping made easy | Download the app</li>
                </a>
            </ul>
        </nav>
        </body>
      
      }
  </div>;
}

export default Header;
