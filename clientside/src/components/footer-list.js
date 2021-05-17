import React from 'react'
import './styles/footer-list.css'
const FooterList = ({heading,list}) => {
    return (
        <div className="footer--list">
            <h5>{heading}</h5>
            <ul>
                {list.map((element,index) => <li key={index}>{element}</li>)}
            </ul>
            
        </div>
    )
}

export default FooterList
