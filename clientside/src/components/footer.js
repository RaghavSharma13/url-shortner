import React from 'react';
import {useHistory} from 'react-router';
import {ReactComponent as ReactFacebook} from '../images/icon-facebook.svg';
import {ReactComponent as ReactInstagram} from '../images/icon-instagram.svg';
import {ReactComponent as ReactPinterest} from '../images/icon-pinterest.svg';
import {ReactComponent as ReactTwitter} from '../images/icon-twitter.svg';
import logo from '../images/logoWhite.svg';
import FooterList from './footer-list';
import './styles/footer.css';
const Footer = () => {
    const history=useHistory();
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="" onClick={()=>history.push("/")} />
            <div className="footer--tags">
                <FooterList heading={"Features"} list={["Link Shortening","Branded Links","Analytics"]}/>
                <FooterList heading={"Resources"} list={["Blog","Developers","Support"]}/>
                <FooterList heading={"Company"} list={["About","Our Team","Careers","Contact"]}/>
            </div>
            <div className="socials">
                <ReactFacebook className="social--icon" alt="facebook" />
                <ReactTwitter className="social--icon" alt="twitter" />
                <ReactPinterest className="social--icon" alt="pinterest" />
                <ReactInstagram className="social--icon" alt="instagram" />
            </div>
        </div>
    )
}

export default Footer
