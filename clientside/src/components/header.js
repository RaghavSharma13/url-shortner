import React from 'react';
import {Link} from 'react-router-dom';
import illus from '../images/illustration-working.svg';
import './styles/header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="hero">
                <img src={illus} alt=""/>
            </div>
            <div className="header--content">
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </p>
                <Link to="/users/signUp" target="_blank">
                    <button className="btn--GS">Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Header
