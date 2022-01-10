import React, { useState, useEffect } from 'react';
import convertTime from '../utils/convertTime';
import './HomePage.scss';

export default function HomePage() {
    const [currentTime, setCurrentTime] = useState();

    useEffect(() => {
        setInterval(()=>{
            let time = new Date();
            setCurrentTime(convertTime(time))
        }, 1000)
    }, [])

    return (
        <section className="container">
            <div className="content">
                <h1 className="content-time">{currentTime}</h1>
                <h2 className="content-text">Click to Check Weather of Cities</h2>
                <a href="/cityWeather"><div className="content-btn"></div></a>
            </div>
        </section>
    )
}
