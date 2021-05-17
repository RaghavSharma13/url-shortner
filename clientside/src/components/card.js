import React from 'react'
import './styles/card.css'
const Card = ({className,heading,logo,children}) => {
    return (
        <div className={`card ${className}`}>
            <div className="img-wrapper">
            <img src={logo} alt=""/>
            </div>
            <h3>{heading}</h3>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Card
