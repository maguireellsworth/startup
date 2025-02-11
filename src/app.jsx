import React from 'react';
import './app.css';

export default function App(){
    return(
        <div>
            <header>
                <h1>KeepMePosted</h1>
                <nav>
                    <menu>
                        <ul class="header-menu">
                            <li><a href="index.html" class="header-link">Login</a></li>
                            <li><a href="home.html" class="header-link">Home</a></li>
                            <li><a href="post.html" class="header-link">Post</a></li>
                            <li><a href="about.html" class="header-link">About</a></li>
                        </ul>
                    </menu>
                </nav>
            </header>
            <footer>
                <div class="smudge-cat">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="./Photos/Peeker_Cat.png" class="smudge_cat"/></a>
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
        </div>
    )
}