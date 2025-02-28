import React from 'react';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import { Login } from './login/login';
import { Home } from './home/home';
import { Post } from './post/post';
import { About } from './about/about';

export default function App(){
    const [user, setUser] = React.useState(localStorage.getItem('user') || null);


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
                    <Route path="/" element={<Login setUser={setUser}/>} exact />
                    <Route path="/home" element={<Home />} />
                    <Route path="/post" element={<Post />} />
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
                        <p>Super Sunny Today!</p>
                        <p>78℉ 🌞😎</p>
                    </div>
                </footer>
        </BrowserRouter>
        </div>
    )
}

function NotFound(){
    return <main>404: Return to sender. Address unknown.</main>
}