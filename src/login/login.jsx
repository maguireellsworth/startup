import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

export function Login({setUser}){
    const [users, setUsers] = React.useState(JSON.parse(localStorage.getItem("users")) || []);
    const [taken, setTaken] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const [valid, setValid] = React.useState(true);

    function findUser(username, password = null){
        // console.log(users);
        for(let i = 0; i< users.length; i++){
            let newuser = JSON.parse(users[i]); 
            if((newuser.username === username && password === null)
                || (newuser.username === username && newuser.password === password)){
                return true;
            }
        }
        return false;
    }

    function loginUser(){
        if(findUser(username, password)){
            console.log('login successful');
            setUser(username)
            localStorage.setItem('user', username);
            navigate('/home');
        }else{
            setValid(false);
        }
    }

    function registerUser(){
        if(!findUser(username)){
            // users = JSON.parse(users);
            users.push(JSON.stringify({username: username, password:password}));
            setUsers(users);
            // setUsers(users);
            localStorage.setItem("users", JSON.stringify(users));
            setTaken(false);
            localStorage.setItem("bool", JSON.stringify(false));
            loginUser()
        }else{
            setTaken(true);
            localStorage.setItem("bool", JSON.stringify(true));

        }
        console.log('register button pressed');
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
                        {!valid && <p style={{color:"#FF0000"}}>Username or Password are incorect</p>}
                        <p>Username:</p>
                        <input type="text" placeholder="xXEpicGamerXx" onChange={usernameChange}/>
                        <p>Password:</p>
                        <input type="password" placeholder="password" onChange={passwordChange}/>
                        <button onClick={loginUser}>Login</button>
                        <button  onClick={registerUser}>Sign-Up</button>
                    </div>
                </div>
            </main>
    )
}