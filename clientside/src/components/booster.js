import React from 'react';
import {Link} from 'react-router-dom';
import './styles/booster.css';
const Booster = () => {
    return (
        <div className="booster">
            <h2>Boost your links today</h2>
            <Link to="/users/signUp" target="_blank">
                <button className="btn--GS">Get Started</button>
            </Link>
        </div>
    )
}

export default Booster
