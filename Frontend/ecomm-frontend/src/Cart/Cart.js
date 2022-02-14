import React from 'react';
import './Cart.css';
import headphone from './headphone_image.jpg';

function Cart() {
   

  return <div >
    
    <h1 id='cartHead'>Shopping Cart</h1>
    <main>
        <div className="cart-Product">
            <section className='added-product'>
                <div className="a">
                    <h4>PRODUCT DETAILS</h4>
                    <div className="cart_info">
                       <div className="image">
                        <img src="/headphone_image.jpg" alt="headphone"/>
                       </div>
                       <div className="desc">
                           <p>Sony WH-CH510 Wireless On-Ear</p>
                           <small>Price : ₹2499</small><br></br>
                           <button id="remove">Remove</button>
                           <button id="save">Save for Later</button>
                       </div>
                    </div>

                </div>
                <div className="b">
                    <h4>QUANTITY</h4>
                    <div className="Quantity">
                        <i className="fas fa-plus"></i>
                        
                                              
                        
                        <i className="fas fa-minus"></i>
                    </div> 
                </div>
                <div className="c">
                    <h4>SUB TOTAL</h4>
                    <p>₹2499</p>
                </div>
            </section>
            <section className='added-product'>
                <div className="a">
                    <h4>PRODUCT DETAILS</h4>
                    <div className="cart_info">
                       <div className="image">
                        <img src={headphone} alt="headphone"/>
                       </div>
                       <div className="desc">
                           <p>Sony WH-CH510 Wireless On-Ear</p>
                           <small>Price : ₹2499</small><br></br>
                           <button id="remove">Remove</button>
                           <button id="save">Save for Later</button>
                       </div>
                    </div>
                </div>
                <div className="b">
                    <h4>QUANTITY</h4>
                    <div className="Quantity">
                        <i className="fas fa-plus"></i>
                        
                        1
                        
                        <i className="fas fa-minus"></i>
                    </div> 
                </div>
                <div className="c">
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
           <div>
               <p>Grand Total Amount</p>
               <p>₹2499</p>
           </div>
           <button className="checkout_button">Proceed to Pay</button>
        </aside>
    </main>
    
        </div>;
}

export default Cart;
