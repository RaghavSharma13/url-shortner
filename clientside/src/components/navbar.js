import React, {  useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import Cookies from "js-cookie";
import {signOut} from '../utils/routes'
import "./styles/navbar.css";

const Navbar = () => {
  const history = useHistory();
  const [token,setToken]=useState(Cookies.get('jwt'));
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
          {token ? (
            <h5 onClick={() => {Cookies.remove("jwt");setToken('')}}>Logout</h5>
          ) : (
            <Link className="login_link" to="/users/login">
              <h5>Login</h5>
            </Link>
          )}
          {token?
            (
              <button className="signUp_signOut" onClick={async()=>{
                await signOut(Cookies.get('jwt'));
                Cookies.remove('jwt');
                setToken('');
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
          {token ? (
            <h5 onClick={()=>{Cookies.remove("jwt");setToken('')}}>Logout</h5>
          ) : (
            <Link className="login_link" to="/users/login" target="_blank">
              <h5>Login</h5>
            </Link>
          )}
          {token?
            (
              <button onClick={async()=>{
                await signOut(Cookies.get('refToken'));
                Cookies.remove('refToken');
                setToken('');
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
