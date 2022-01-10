import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import convertDate from '../../../utils/convertDate';
import Paginate from './ForecastPagination';

export default function ForecastTable() {
    const { cityWeatherForecast } = useSelector(state => state.cityForecast);
    const { forecastList } = cityWeatherForecast;

    //Pagination
    const [pageNumber, setPageNumber] = useState(0);
    const [forecastPerPage] = useState(3);
    
    const forecastData = forecastList.slice(0,40);
    const visitedPages = pageNumber * forecastPerPage;
    const showForecast = forecastData.slice(visitedPages, visitedPages + forecastPerPage);
    const pageCount = Math.ceil(forecastData.length / forecastPerPage);
    
    function pageChange({selected}){
        setPageNumber(selected)
    }

    return (
        <div className="panel-content">
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header">Date</th>
                            <th className="table-header">Temp</th>
                            <th className="table-header">Min Temp</th>
                            <th className="table-header">Max Temp</th>
                            <th className="table-header">Wind</th>
                            <th className="table-header">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {showForecast.map((forecast) => {
                        return(
                                <tr key={forecast.daytimes} className='table-data-row'>
                                    <td className="table-data">{convertDate(forecast.daytimes)}</td>
                                    <td className="table-data">{forecast.temp}°C</td>
                                    <td className="table-data">{forecast.minTemp}°C</td>
                                    <td className="table-data">{forecast.maxTemp}°C</td>
                                    <td className="table-data">{forecast.windSpeeds}m/s</td>
                                    <td className="table-data">{forecast.descriptions}</td>
                                </tr>
                        )})}
                    </tbody>
                </table>
            </div>
            <div className="pagination-bar">
                <Paginate pageCount={pageCount} pageChange={pageChange}  />
            </div>
        </div>
    )
}
