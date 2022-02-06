import React from 'react';
import './Footer.css';

function Footer() {
  return <div>
      <footer class="footer">
        <div class="container">
            <div class="row">

                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shippings</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Payment Options</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Make Money With Us</h4>
                    <ul>
                        <li><a href="#">Sell Here</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Follow</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

            </div>
        </div>
    </footer>
  </div>;
}

export default Footer;
