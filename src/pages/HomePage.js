import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import convertTime from '../utils/convertTime';
import './HomePage.scss';

export default function HomePage() {
    const [currentTime, setCurrentTime] = useState();

    useEffect(() => {
        const dynamicTime = setInterval(()=>{
            let time = new Date();
            setCurrentTime(convertTime(time))
        }, 10);
        return () =>{
            clearInterval(dynamicTime);
        }
    }, [])

    return (
        <section className="container">
            <div className="content">
                <h1 className="content-time">{currentTime}</h1>
                <h2 className="content-text">Click to Check Weather of Cities</h2>
                <Link to={'/cityWeather'}><div className="content-btn"></div></Link>
            </div>
        </section>
    )
}
