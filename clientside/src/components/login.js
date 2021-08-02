import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {logIn} from '../utils/routes'

const Login = ({setAuth}) => {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState();
  return (
    <div className="userForm">
      <div className="form">
        <form>
          <h2>Log In.</h2>
          {loginSuccess === 0 && <p className="loginError">Invalid Login!!</p>}
          <label className="email--label">
            Email
            <input
              className="email--input"
              type="text"
              placeholder="Enter your email id.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={`signUp--label password`}>
              Password
              <input
                className="password--input"
                type="password"
                placeholder="Enter a password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              className="btn--ls"
              type="submit"
              onClick={async(e) => {
                e.preventDefault();
                await logIn(setAuth, email, password, setEmail, setPassword, setLoginSuccess, ()=>history.goBack());
              }}
            >
              Log In
            </button>
          </label>
        </form>
        <p>
          Don't have an Account? <Link to="/users/signUp">Sign Up.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
