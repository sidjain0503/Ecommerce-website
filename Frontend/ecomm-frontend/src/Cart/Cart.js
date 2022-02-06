import React from 'react';
import './Cart.css';
import headphone from './headphone_image.jpg';

function Cart() {
  return <div>
    
        <div className="cart_container">
        <table>
            <tr>
                <th>PRODUCT</th>
                <th>QUANTITY</th>
                <th>SUB TOTAL</th>
            </tr>
            <tr>
                <td>
                    <div className="cart_info">
                        <img src={headphone} alt="headphone"/>
                        <div className="desc">
                            <p>Sony WH-CH510 Wireless On-Ear</p>
                            <small>Price : ₹2499</small><br/>
                            <button id="remove">Remove</button>
                            <button id="save">Save for Later</button>
                        </div>
                    </div>
                </td>
                <td>
                    <input type="number" className="input-number"/>
                </td>
                <td>₹2499</td>
            </tr>
            </table>
            <div className="total">
                <table>
                   <tr>
                       <th colSpan="2">CART TOTAL</th>
                    </tr>
                    <tr>
                       <td>Sub Total</td>
                       <td>₹2499</td>
                    </tr>
                    <tr>
                       <td>Shipping Charge</td>
                       <td>₹249</td>
                    </tr>
                    <tr>
                       <td>Taxes and Charges</td>
                       <td>₹252</td>
                    </tr>
                    <tr className="last">            
                       <td><br/> Grand Total Amount</td>
                       <td>₹3000</td>
                    </tr>
                    <tr>
                       <td><button className="payment_button">Proceed to Payment</button></td>
                    </tr>
                </table>   
            </div>
        </div>
    
        </div>;
}

export default Cart;
