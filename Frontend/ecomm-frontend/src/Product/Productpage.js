import React,{useEffect,useState} from 'react';
import './Productpage.css'
import { useParams } from 'react-router-dom';
// import camera from './camera_image.jpg';
import axios from 'axios'
function Productpage() {

  const Params = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    
    const id = Params.id;

    axios.get(`http://localhost:8000/product/${id}`).then((res) => {
      const productData = res.data;
      setProduct(productData);
      console.log("products >>>",productData);
    });
  }, []);

  return <div className="Product_section">
      {/* Nupur add code here  */}
         

             <div >
                 <div className="Product_image">
                     <img src={product.productImage} alt="Camera"/>
                 </div>
              </div>   
                 <div className="product_details">   
                     <div className="product_name">
                       <h2>{product.name} </h2>
                     </div>
                     <div className="product_reviews">
                      <p>Rating : {product.rating}</p> 
                         <p>⭐⭐⭐⭐⭐ (2 Reviews)</p>
                     </div>
                     <div className="product_price">
                         <h2>₹{product.price}.00</h2> 
                     
                         <div className="button-wrapper">
                             <input className="button" type="submit" value="-" />
                             <p class="number"> 1 </p>
                             <input className="button" type="submit" value="+" />
                             <input className="cart_button" type="submit" value="Add to Cart"/>
                         </div>
                     </div>
                     <p className="status">Stock: <span>{product.stock}</span></p>
                     <div className="product_discription">
                       <h2>Discription : </h2>
                       <span className="desc">
                       {product.description}
                       </span>
                       <input className="review_button" type="submit" value="Submit Review"/>
                     </div>

                 </div>
              
         </div>
      
  
}

export default Productpage;

    