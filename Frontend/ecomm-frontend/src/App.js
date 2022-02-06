import './App.css';
import Header  from './Header/Header';
import LoginSignup from './LoginSignup/LoginSignup';
import Product from './Product/Productpage';
import Cart from './Cart/Cart';
function App() {
  return (
    <div className="App">
      <Header/>
      <LoginSignup/>
      <Product/>
      <Cart/>
    </div>
  );
}

export default App;
