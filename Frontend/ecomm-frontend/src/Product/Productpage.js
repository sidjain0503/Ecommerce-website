import React from 'react';
import './Productpage.css'
import camera from './camera_image.jpg';
function Productpage() {
  return <div>
      {/* Nupur add code here  */
         
         <div className="body">
             <div className="Product_section">
                 <div className="Product_image">
                     <img src={camera} alt="Camera"/>
                 </div>
                 <div className="product_details">   
                     <div className="product_name">
                       <h2>Canon EOS 5D Mark IV DSLR Camera with 24-105mm <br/> f/4L II Lens</h2>
                     </div>
                     <div className="product_reviews">
                         <p>⭐⭐⭐⭐⭐ (2 Reviews)</p>
                     </div>
                     <div className="product_price">
                         <h2>₹24999</h2> 
                     
                         <div className="button-wrapper">
                             <input className="button" type="submit" value="-" />
                             <p class="number"> 1 </p>
                             <input className="button" type="submit" value="+" />
                             <input className="cart_button" type="submit" value="Add to Cart"/>
                         </div>
                     </div>
                     <p className="status">Status: <span>InStock</span></p>
                     <div className="product_discription">
                       <h2>Discription : </h2>
                       <span className="desc">
                         With this Canon DSLR Camera, you can take all the pictures
                         you’ve dreamt of taking with ease and efficiency. With a 30.4
                         MP high-resolution and high-speed (full-frame) CMOS sensor, 
                          your pictures will have the smallestof details that will
                         make them stand out, beautifully.With this DSLR camera,  
                         you can shoot continuously with complete AF and AE tracking. 
                         You can capture many RAW images and JPEGs in one burst while 
                         capturing sharp images in every frame. You can record movies 
                         in high resolution as well with this DSLR camera.
                       </span>
                       <input className="review_button" type="submit" value="Submit Review"/>
                     </div>
                 </div>
             </div>     
         </div>
         
      }
  </div>;
}

export default Productpage;
