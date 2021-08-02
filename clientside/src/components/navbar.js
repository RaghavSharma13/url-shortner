import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import {logout, signOut} from '../utils/routes'
import "./styles/navbar.css";

const Navbar = ({logged, setLogged}) => {
  const history = useHistory();
  const body = document.body;
  const [overlay, setOverlay] = useState([false, false]);
  // overlay [open,close]

  const checkOverlay = () => {
    if (!overlay[0]) return setOverlay([true, false]);
    return setOverlay([false, true]);
  };
  body.classList.toggle("noScroll", overlay[0]);
  return (
    <div className="navbar">
      <img
        className="logo"
        src={logo}
        alt=""
        onClick={() => history.push("/")}
      />
      <div className="navbar--contents">
        <div className="navbar--links">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="navbar--login">
          {logged ? (
            <h5 onClick={async() => {await logout();setLogged(false)}}>Logout</h5>
          ) : (
            <Link className="login_link" to="/users/login">
              <h5>Login</h5>
            </Link>
          )}
          {logged?
            (
              <button className="signUp_signOut" onClick={async()=>{
                await signOut();
                setLogged(false);
              }}>Sign Out</button>
            ):
            (
              <Link className="signUp--Link" to="/users/signUp">
                <button className="signUp_signOut">Sign Up</button>
              </Link>
            )
          }
        </div>
      </div>
      <div
        className={`burger ${overlay[0] ? "burg-close" : ""}`}
        onClick={() => checkOverlay()}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div
        className={`overlay ${
          overlay[0] ? "fade-in" : overlay[1] ? "fade-out" : ""
        }`}
      >
        <div className="overlay--links">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className="line"></div>
          {logged ? (
            <h5 onClick={async()=>{await logout();setLogged(false)}}>Logout</h5>
          ) : (
            <Link className="login_link" to="/users/login" target="_blank">
              <h5>Login</h5>
            </Link>
          )}
          {logged?
            (
              <button onClick={async()=>{
                await signOut();
                setLogged(false);
              }}>Sign Out</button>
            ):
            (
              <Link className="signUp--Link" to="/users/signUp" target="_blank">
                <button>Sign Up</button>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
