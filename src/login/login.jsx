import React from 'react';
import './login.css';

export function Login(setUsers, users){
    const [user, setUser] = React.useState(localStorage.getItem("user") || null);
    const [bool, setBool] = false;
    const [username, setUsername] = null;
    const [password, setPassword] = null;

    function loginUser(){

    }

    function registerUser(){

    }

    function userameChange(e){
        setUsername(e.target.value);
    }


    return(
            <main className='login'>
                <h2>Welcome!</h2>
                <h3>Ready to see whats happening?</h3>
                <div className="sign-in-container">
                    <form method="get" className="sign-in">
                        <p>Username:</p>
                        <input type="text" placeholder="xXEpicGamerXx"/>
                        <p>Password:</p>
                        <input type="password" placeholder="password" onChange={usernameChange}/>
                        <button type="submit" onClick={loginUser}>Login</button>
                        {bool && <p>User already exists!</p>}
                        <button type="submit" onClick={registerUser}>Sign-Up</button>
                    </form>
                </div>
            </main>
    )
}