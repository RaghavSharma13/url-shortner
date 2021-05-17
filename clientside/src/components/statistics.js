import React from 'react';
import brandReco from '../images/icon-brand-recognition.svg';
import records from '../images/icon-detailed-records.svg';
import customizable from '../images/icon-fully-customizable.svg';
import Card from './card';
import './styles/statistics.css'

const Statistics = () => {
    return (
        <div className="stats">
            <h2>Advanced Statistics</h2>
            <p className="statpara">
            Track how your links are performing across the web with our 
            advanced statistics dashboard.
            </p>
            <div className="Cards">
            <Card className="card-1" heading={"Brand Recognition"} logo={brandReco}>
            Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.
            </Card>
            <Card className="card-2" heading={"Detailed Records"} logo={records}>
            Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
            </Card>
            <Card className="card-3" heading={"Fully Customizable"} logo={customizable}>
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.
            </Card>
            </div>
        </div>
    )
}

export default Statistics
