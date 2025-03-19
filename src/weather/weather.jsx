import React from 'react';
import { useState, useEffect } from 'react';
import './weather.css';

export function Weather(){
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");

    async function getWeather(){
        try {
            const response = await fetch(`/api/weather/${city}`);
            const weather = await response.json();
            setWeather(weather);
        } catch (error) {
            console.log("Couldn't get weather", error);
        }
    }

    useEffect(() => {
        const getCity = async () => {
            try {
                const response = await fetch('/api/location');
                const data = await response.json();
                setCity(data.city);
                // setCity("Provo");
            } catch (error) {
                console.log("Couldn't get location:", error);
            }
        };
    
        getCity();
    }, []);

    useEffect(() => {
        if (city !== "") {
            getWeather();
        }
    }, [city]);

    // get the weather every two minutes
    useEffect(() => {
        const interval = setInterval(() => {
            try{
                getWeather();
            }catch(error) {
                console.log("Couldn't get the weather")
            }
        }, 120000);

        return () => clearInterval(interval);
    }, [city])


    if(!weather || !weather.current){
        return (
            <div id="weather_loading">
                <p className="weather_data">Weather: Loading...</p>
            </div>
        )
    }else{
        return(
            <div id="weather">        
                <img className="weather_icon" src={weather.current.condition.icon}/> 
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