import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header/Header";
import LoginSignup from "./LoginSignup/LoginSignup";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import Cards from "./ProductCards/Cards";
import Productpage from './Product/Productpage';
// import Card2 from './ProductCards/Card2';

function App() {

  return (
    <div className="App">
        <Router>
          <Switch>

          <Route path="/cart">
            <Header/>
            <Cart/>    
            <Footer/>
            </Route>

            <Route path="/product/:id">
            <Header/>
            <Productpage/>
            <Footer/>
            </Route>


          <Route path="/loginSignup">
            <Header/>
                <LoginSignup/>
                <Footer/>
            </Route>

            <Route path="/">
            <Header  />
  
            <Cards />
                
                <Footer/>
            </Route>


          </Switch>
        </Router>
      

    </div>
  );
}

export default App;
