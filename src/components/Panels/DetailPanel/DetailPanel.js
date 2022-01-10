import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCityWeather } from '../../../feature/cityWeather';
import { showHide } from '../../../feature/showHide';
import './DetailPanel.scss';


function DetailPanels() {
    const dispatch = useDispatch();
    const { cityWeather, status } = useSelector(state => state.cityWeather);
    const cityId = useSelector((state) => state.cityId.value);
    
    useEffect(() => {
        if (cityId === ''){
            return;
        }
        dispatch(getCityWeather(cityId))
    }, [dispatch, cityId])

    if(status === "Loading"){
        return <div className="loading"></div>
    }else if(cityWeather === null){
        return null;
    }

    const { city, country, temp, weather, wind } = cityWeather;

    return (
        <div className="panel">
            <h2 className="panel-title">City: {city}, {country}</h2>
            <div className='panel-body'>
                <div className='panel-content--left'>
                    {weather.map((item, idx) => {
                        return(
                        <React.Fragment key={idx}>
                            <p className='panel-item'>{item.main}</p>
                            <p className='panel-item'>{item.description}</p>  
                        </React.Fragment>
                        )
                    })}
                    <p className='panel-item'>{temp}°C</p>
                    <p className='panel-item'>{wind}m/s</p>
                </div>
                <div className='panel-content--right'>
                    {weather.map((item, idx) => {
                        return <div key={idx}>
                            <img className="panel-img" src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt={item.description} />
                            </div>
                    })}
                    <button className="btn" onClick={()=> dispatch(showHide(true))}>5 day forecast</button>
                </div>
            </div>
        </div>
    )
}

export default DetailPanels
