import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCityForecast = createAsyncThunk(
    "cityForecast/getCityForecast",
    async (cityId) => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=a30f79a44d74a7b2c4c8f414d958a23e`)
            return {
                city: response.data.city.name,
                country: response.data.city.country,
                forecastList: response.data.list.map((obj) => ({
                    daytimes: obj.dt,
                    dt: obj.dt_txt,
                    temp: obj.main.temp,
                    minTemp: obj.main.temp_min,
                    maxTemp: obj.main.temp_max,
                    windSpeeds: obj.wind.speed,
                    descriptions: obj.weather[0].description
                }))
            };
        }catch(error){
            console.log('Get City Forecast',error);
        }
        
    }
);

const cityForecastSlice = createSlice({
    name: "cityForecast",
    initialState:{
        cityWeatherForecast: null,
        status: null
    },
    extraReducers: {
        [getCityForecast.pending]: (state, action) => {
            state.status = "Loading"
        },
        [getCityForecast.fulfilled]: (state, action) => {
            state.status = "Succeeded";
            state.cityWeatherForecast = action.payload
        },
        [getCityForecast.rejected]: (state, action) => {
            state.status = "Failed"
        }
    }
})

export default cityForecastSlice.reducer;