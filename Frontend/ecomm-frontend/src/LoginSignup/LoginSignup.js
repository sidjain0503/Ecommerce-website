import React,{useState} from 'react';
import './LoginSignup.css'
import ReactCardFlip from 'react-card-flip';

import background from './background.jpg'



function LoginSignup() {
    
    const [Flipped, setFlipped] = useState(false);

    const handleflip=(e)=>{
        e.preventDefault();
        console.log("openregister")
        setFlipped(!Flipped)

    }
    


  return <div>
      {/* Ayushi : Write your code here */}
      <div className="login-register-container">
      <div className="login-register-box" style={{ backgroundImage: `url(${background})` }}>
          <ReactCardFlip className="inner-box" isFlipped={Flipped} flipDirection="horizontal">
              <div className="front">
                  <h2>LOGIN</h2>
                  <form>
                      <input type="email" className="input-box" placeholder="Email" required/>
                      <input type="password" className="input-box" placeholder="Password" required/>
                      <button type="submit" className="submit-btn"> Submit </button>
                  </form>
                      <button type="button" className="btn" onClick={handleflip}>New User? Register</button>
                      <a href="">Forgot Password</a>
              </div>
               <div className="back">
                      <h2>REGISTER</h2>
                      <form>
                          <input type="text" className="input-box" placeholder="Name" required/>
                          <input type="email" className="input-box" placeholder="Email" required/>
                          <input type="password" className="input-box" placeholder="Password" required/>
                          <button type="submit" className="submit-btn"> Submit </button>
                      </form>
                          <button type="button" className="btn" onClick={handleflip}>Already have an account? Login</button>
                          <a href="">Forgot Password</a>
                      
                  </div>
              
          </ReactCardFlip>
      </div>
        </div>
    </div>
  
}

export default LoginSignup;
