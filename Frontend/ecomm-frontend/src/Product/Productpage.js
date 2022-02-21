import React from 'react';
import './Productpage.css'
import camera from './camera_image.jpg';
function Productpage() {
  return <div>
      {/* Nupur add code here  */
         
      <div class="Product_section">
         <div class="Product_image">
             <img src="camera_image.jpg" alt="Camera"/>
         </div>
         <div class="product_details">   
              <div class="product_name">
               <p>Canon EOS 5D Mark IV DSLR Camera with 24-105mm <br/> f/4L II Lens</p>
              </div>
              <div class="product_reviews">
                 <p>⭐⭐⭐⭐⭐ (2 Reviews)</p>
              </div>
              <div class="product_price">
                 <h2>₹24999</h2>
                 <div class="button-wrapper">
                     <input class="cart_button" type="submit" value="Add to Cart"/>
                     <input class="cart_button" type="submit" value="Buy it now"/>
                 </div>
              </div>
              <div class="product_discription">
                 <span class="desc">
                     With this Canon DSLR Camera, you can take all the pictures
                     you’ve dreamt of taking with ease and efficiency. With a 30.4
                     MP high-resolution and high-speed (full-frame) CMOS sensor, 
                     your pictures will have the smallestof details that will
                     make them stand out, beautifully.With this DSLR camera, You  
                     you can shoot continuously with complete AF and AE tracking. 
                     can capture many RAW images and JPEGs in one burst while 
                     capturing sharp images in every frame. You can record movies 
                     in high resolution as well with this DSLR camera.
                 </span>
                 <input class="review_button" type="submit" value="Submit Review"/>
              </div>
         </div>
      </div>     
      }
  </div>;
}

export default Productpage;
