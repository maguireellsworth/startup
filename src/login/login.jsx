import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

export function Login({setUser, user}){
    const [taken, setTaken] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const [valid, setValid] = React.useState(true);

    async function loginUser(){
        const response = await fetch("/api/auth/login", {
            method: "post",
            body: JSON.stringify({username: username, password: password}),
            headers: {'Content-type': 'application/json; charset=UTF-8',}
        })
        if(response.status === 200){
            setUser(username);
            localStorage.setItem("user", username);
            navigate('/home');
        }else{
            setValid(false);
        }
    }

    async function registerUser(){
        const response = await fetch('/api/auth/create', {
            method: 'post',
            body: JSON.stringify({username: username, password: password}),
            headers: {'Content-type': 'application/json; charset=UTF-8',}
        })
        if(response.status === 200){
            setValid(true);
            setUser(username);
            localStorage.setItem("user", username);
            navigate('/home');
        }else if(response.status === 409){
            setTaken(true);
        }
        
        console.log('register button pressed');
    }

    async function logoutUser(){
        const response = await fetch("/api/auth/logout", {
            method: "delete",
        })
        .catch(() => {
            // Logout failed. Assuming offline
          })
          .finally(() => {
            localStorage.removeItem('user');
            setUser(null);
          });
        // localStorage.removeItem("user");
        // setUser(null)
    }

    function usernameChange(e){
        setUsername(e.target.value);
    }

    function passwordChange(e){
        setPassword(e.target.value);
    }


    return(
            <main className='login'>
                <h2>Welcome!</h2>
                <h3>Ready to see whats happening?</h3>
                <div className="sign-in-container">
                    <div className="sign-in">
                        {taken && <p style={{color:"#FF0000"}}>Username already taken!</p>}
                        {!valid && <p style={{color:"#FF0000"}}>Username or Password are incorrect</p>}
                        {!user && (
                        <>
                            <p>Username:</p>
                            <input type="text" placeholder="xXEpicGamerXx" onChange={usernameChange} />
                            <p>Password:</p>
                            <input type="password" placeholder="password" onChange={passwordChange} />
                            <button onClick={loginUser} disabled={!username || !password}>Login</button>
                            <button  onClick={registerUser} disabled={!username || !password}>Sign-Up</button>
                        </>
                        )}
                        {user && <button onClick={logoutUser}>Logout</button>}
                    </div>
                </div>
            </main>
    )
}