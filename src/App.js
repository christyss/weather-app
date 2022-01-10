import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cityWeather" element={<WeatherPage/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}