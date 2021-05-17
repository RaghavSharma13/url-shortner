import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {signUp} from '../utils/routes'
import "./styles/signUp.css";

const SignUp = () => {
  const history =useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signUpSuccess,setSignUpSuccess]=useState(false);

  const root = document.querySelector(":root");
  root.style.setProperty("--psuedoEmailMsg", `"${emailError}"`);
  root.style.setProperty("--psuedoPasswordMsg", `"${passwordError}"`);
  
  return (
    <div className="userForm">
      <div className="form">
        <form>
          <h2>Sign Up.</h2>
          {signUpSuccess?
              <p className="success">Sign Up successful!! You can now close this tab.</p>
              :
              <p>This is a Project Site. Avoid using real Credentials.</p>
          }
          <label className={`email--label`}>
            Email
            <input
              className={`email--input ${emailError ? "invalid" : ""}`}
              type="text"
              placeholder="Enter your email id..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={`password--label`}>
            Password
            <input
              className={`password--input ${passwordError ? "invalid" : ""}`}
              type="password"
              placeholder="Enter a password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="btn--ls"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              signUp(email,password,setEmail,setPassword,setEmailError,setPasswordError,setSignUpSuccess,()=>{history.goBack()});
            }}
          >
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/users/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
