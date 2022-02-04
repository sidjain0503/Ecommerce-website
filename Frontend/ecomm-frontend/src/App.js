import "./App.css";
import Header from "./Header/Header";
import LoginSignup from "./LoginSignup/LoginSignup";
import Cards from "./ProductCards/Cards";
function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <LoginSignup/>
    </div>
  );
}

export default App;
