import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCityWeather = createAsyncThunk(
    "cityWeather/getCityWeather",
    async (cityId) => {
        try{
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=a30f79a44d74a7b2c4c8f414d958a23e`)
            return {
                city: response.data.name,
                country: response.data.sys.country,
                weather: response.data.weather.map((item)=> ({main: item.main, description: item.description, icon: item.icon})),
                temp: response.data.main.temp,
                wind: response.data.wind.speed
            };
        }catch(error){
            console.log('Get City Weather', error);
        }
        
    }
);

const cityWeatherSlice = createSlice({
    name: "cityWeather",
    initialState:{
        cityWeather: null,
        status: null
    },
    extraReducers: {
        [getCityWeather.pending]: (state, action) => {
            state.status = "Loading"
        },
        [getCityWeather.fulfilled]: (state, action) => {
            state.status = "Succeeded";
            state.cityWeather = action.payload
        },
        [getCityWeather.rejected]: (state, action) => {
            state.status = "Failed"
        }
    }
})

export default cityWeatherSlice.reducer;