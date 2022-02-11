import React from 'react';
import './Cart.css';
import headphone from './headphone_image.jpg';

function Cart() {
  return <div>
    
    <h1>Shopping Cart</h1>
    <main>
        <div class="Product">
            <section>
                <div class="a">
                    <h4>PRODUCT DETAILS</h4>
                    <div class="cart_info">
                       <div class="image">
                        <img src="/headphone_image.jpg" alt="headphone"/>
                       </div>
                       <div class="desc">
                           <p>Sony WH-CH510 Wireless On-Ear</p>
                           <small>Price : ₹2499</small><br></br>
                           <button id="remove">Remove</button>
                           <button id="save">Save for Later</button>
                       </div>
                    </div>
                </div>
                <div class="b">
                    <h4>QUANTITY</h4>
                    <div class="Quantity">
                        <i class="fas fa-plus"></i>
                        |
                        <input type="number" value="1" class="input-number"/>  
                        |
                        <i class="fas fa-minus"></i>
                    </div> 
                </div>
                <div class="c">
                    <h4>SUB TOTAL</h4>
                    <p>₹2499</p>
                </div>
            </section>
            <section>
                <div class="a">
                    <h4>PRODUCT DETAILS</h4>
                    <div class="cart_info">
                       <div class="image">
                        <img src="/headphone_image.jpg" alt="headphone"/>
                       </div>
                       <div class="desc">
                           <p>Sony WH-CH510 Wireless On-Ear</p>
                           <small>Price : ₹2499</small><br></br>
                           <button id="remove">Remove</button>
                           <button id="save">Save for Later</button>
                       </div>
                    </div>
                </div>
                <div class="b">
                    <h4>QUANTITY</h4>
                    <div class="Quantity">
                        <i class="fas fa-plus"></i>
                        |
                        <input type="number" value="1" class="input-number"/>  
                        |
                        <i class="fas fa-minus"></i>
                    </div> 
                </div>
                <div class="c">
                    <h4>SUB TOTAL</h4>
                    <p>₹2499</p>
                </div>
            </section>
        </div>
        <aside>
           <h4>The Total Amount Of</h4>
           <div>
              <p>Product amount</p>
              <p>₹2499</p>
           </div>
           <div>
              <p>Shipping Charge</p>
              <p>₹2499</p>
           </div>
           <div>
              <p>Taxes and Charges</p>
              <p>₹2499</p>
           </div>
           <div style="border-top: 2px dotted #aaa;">
               <p>Grand Total Amount</p>
               <p>₹2499</p>
           </div>
           <button class="checkout_button">Proceed to Pay</button>
        </aside>
    </main>
    
        </div>;
}

export default Cart;
