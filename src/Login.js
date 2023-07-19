import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          navigate('/')

        })
        .catch(error => alert(error.message))
    
  }

  const register = (e) => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
      //it successfully created a new user with email and password
      
      if(auth){
        navigate('/')

      }

    })
        .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
        />
      </Link>
      <div className="login__container">
        <h1>
          <u>Sign in</u>
        </h1>
        <form>
          <h5>e-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign-in
          </button>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
            <button onClick={register} className="login__registerButton">
              Create account now
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
