

import React,{useEffect} from 'react'
import "./App.css";
import Header from "./Header/Header";
import LoginSignup from "./LoginSignup/LoginSignup";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import Cards from "./ProductCards/Cards";
// import axios from 'axios'

function App() {

  useEffect(() => {
    // axios.get(`http://localhost:8000/product/new`)
    //     .then((response) => {
    //       console.log(response)
    //     })
}, [])


  return (
    <div className="App">

      <Header  />
       <Cards />
       <LoginSignup/>
       <Cart/>
       <Footer/>

    </div>
  );
}

export default App;
