import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { Post } from './post/post';
import { About } from './about/about';

export default function App(){
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState([]);
    
    
    async function getWeather(){
        const response = await fetch(`/api/weather`)
            .then((response) => response.json())
            .then((weather) => {
                setWeather(weather);
            })
    }

    // get the location and weather on mount
    useEffect(() => {
        try{
            const getLocation = async () => {
                const city = await fetch('/api/location');
                setLocation(city);
            };
            // getLocation();
            getWeather();
        }catch(error) {
            console.log("Couldn't get location: " + error)
        }
    }, [])


    //get the weather every two minutes
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         try{
    //             getWeather();
    //         }catch(error) {
    //             console.log("Couldn't get the weather")
    //             setWeather("something went wrong")
    //         }
    //     }, 120000);

    //     return () => clearInterval(interval);
    // }, [])

    return(
        <div className="app-container">
            <BrowserRouter>
                <header className="header">
                    <h1>KeepMePosted</h1>
                    <nav>
                        <menu>
                            <ul className="header-menu">
                                <li><NavLink to="" className="header-link">Login</NavLink></li>
                                {user && <li><NavLink to="home" className="header-link">Home</NavLink></li>}
                                {user && <li><NavLink to="post" className="header-link">Post</NavLink></li>}
                                <li><NavLink to="about" className="header-link">About</NavLink></li>
                            </ul>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<Login setUser={setUser} user={user}/>} exact />
                    <Route path="/home" element={<Home user={user}/>} />
                    <Route path="/post" element={<Post user={user}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer>
                    <div className="smudge-cat">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="/Peeker_Cat.png" className="smudge_cat"/></a>
                    </div>
                    <div id="contact">
                        <h2>Maguire Ellsworth</h2>
                        <h4>Arch Wizard and Caretaker of KeepMePosted </h4>
                        <p>See behind the screen here -----{'>'} <a href="https://github.com/maguireellsworth/startup">Github</a></p>
                    </div>
                    <div id="weather">
                        {!weather && <p>Weather: Loading...</p>}
                        {weather && (
                            <>
                                <img src={weather.current.condition.icon}/> 
                                <div className="weather_data_container">
                                    <p className="weather_data"><img src="/Thermastat.png" height="15em"/> {weather.current.temp_f}℉</p>
                                    <p className="weather_data"><img src="/wind.png" height="15em"/> {weather.current.wind_mph}mph</p>
                                    <p className="weather_data"><img src="/humidity.png" height="15em"/> {weather.current.humidity}%</p>
                                    <p></p>
                                </div>
                            </>
                        )}
                    </div>
                </footer>
        </BrowserRouter>
        </div>
    )
}

function NotFound(){
    return <main>404: Return to sender. Address unknown.</main>
}