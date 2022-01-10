import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cityIdReducer from '../feature/cityId';
import cityWeatherReducer from '../feature/cityWeather';
import cityForecastReducer from '../feature/cityForecast';
import showHideReducer from '../feature/showHide';


export const store = configureStore({
    reducer:{
        cityId: cityIdReducer,
        cityWeather: cityWeatherReducer,
        cityForecast: cityForecastReducer,
        showHide: showHideReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
