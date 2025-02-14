import React from 'react';
import './login.css';

export function Login(){
    return(
            <main className='login'>
                <h2>Welcome!</h2>
                <h3>Ready to see whats happening?</h3>
                <div className="sign-in-container">
                    <form method="get" action="home.html" className="sign-in">
                        <p>Username:</p>
                        <input type="text" placeholder="xXEpicGamerXx"/>
                        <p>Password:</p>
                        <input type="password" placeholder="password"/>
                        <button type="submit">Login</button>
                        <button type="submit">Sign-Up</button>
                    </form>
                </div>
            </main>
    )
}