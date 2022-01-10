import React from 'react';
import { useSelector } from 'react-redux';
import Dropdown from '../components/Dropdown/Dropdown';
import DetailPanel from '../components/Panels/DetailPanel/DetailPanel';
import ForecastPanel from '../components/Panels/ForecastPanel/ForecastPanel';
import './WeatherPage.scss';

export default function WeatherPage() {
    const show = useSelector((state) => state.showHide.show);
    return (
        <section className="page-container">
            <a className='home' href="/"><button className='home-btn'>Home</button></a>
            <Dropdown />
            <DetailPanel />
            {show ? <ForecastPanel /> : null}
        </section>
    )
}
