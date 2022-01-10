import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showHide } from '../../../feature/showHide';
import { getCityForecast } from "../../../feature/cityForecast";
import Table from './ForecastTable';
import './ForecastPanel.scss';

function ForecastPanel() {
    const dispatch = useDispatch();
    const { cityWeatherForecast, status } = useSelector(state => state.cityForecast);
    const cityId = useSelector((state) => state.cityId.value);

    useEffect(() => {
        if (cityId === ''){
            return;
        }
        dispatch(getCityForecast(cityId))
    }, [dispatch, cityId])

    if(status === "Loading"){
        return <div className="loading"></div>
    }else if(cityWeatherForecast === null){
        return null;
    }
    
    const { city, country } = cityWeatherForecast;

    return (
        <div className="panel panel--large">
            <div className='panel-header'>
                <h2 className='panel-title'>Weather forecast for {city}, {country}</h2>
                <button className="btn-close" onClick={()=> dispatch(showHide(false))}>Close</button>
            </div>
            <Table />      
        </div>
    )
}

export default ForecastPanel
