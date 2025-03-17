import React from 'react';
import { useState, useEffect } from 'react';
import './weather.css';

export function Weather(){
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState([]);

    async function getWeather(){
        const response = await fetch(`/api/weather/${city}`)
            .then((response) => response.json())
            .then((weather) => {
                setWeather(weather);
            })
    }

    // get the location and weather on mount
    useEffect(() => {
        try{
            const getCity = async () => {
                const city = await fetch('/api/location');
                setCity(city);
            };
            getCity();
            getWeather();
        }catch(error) {
            console.log("Couldn't get location: " + error)
            setWeather(null);
        }
    }, [])

    // get the weather every two minutes
    useEffect(() => {
        const interval = setInterval(() => {
            try{
                getWeather();
            }catch(error) {
                console.log("Couldn't get the weather")
                setWeather("something went wrong")
            }
        }, 120000);

        return () => clearInterval(interval);
    }, [])


    if(!weather || !weather.current){
        return (
            <div id="weather_loading">
                <p className="weather_data">Weather: Loading...</p>
            </div>
        )
    }else{
        return(
            <div id="weather">        
                <img src={weather.current.condition.icon}/> 
                <div className="weather_data_container">
                    <p className="weather_data"><img src="/Thermastat.png" height="15em"/> {weather.current.temp_f}℉</p>
                    <p className="weather_data"><img src="/wind.png" height="15em"/> {weather.current.wind_mph}mph</p>
                    <p className="weather_data"><img src="/humidity.png" height="15em"/> {weather.current.humidity}%</p>
                    <p></p>
                </div>
            </div>      
        )
    }
}