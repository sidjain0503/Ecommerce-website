import React from 'react';
import './LoginSignup.css'
import './background.jpg'
var box=document.getElementById("box");
            function openRegister(){
                box.style.transform="rotateY(-180deg)";
            }
            function openLogin(){
                box.style.transform="rotateY(0deg)";
            }
function LoginSignup() {
  return <div>
      {/* Ayushi : Write your code here */
      <div className="login-register-container">
      <div className="login-register-box">
          <div className="inner-box" id="box">
              <div className="front">
                  <h2>LOGIN</h2>
                  <form>
                      <input type="email" className="input-box" placeholder="Email" required/>
                      <input type="password" className="input-box" placeholder="Password" required/>
                      <button type="submit" className="submit-btn"> Submit </button>
                  </form>
                      <button type="button" className="btn" onclick="openRegister()">New User? Register</button>
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
                          <button type="button" className="btn" onclick="openLogin()">Already have an account? Login</button>
                          <a href="">Forgot Password</a>
                      
                  </div>
              
          </div>
      </div>
  </div>}
  </div>;
}

export default LoginSignup;
