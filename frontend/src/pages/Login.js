import React, {useState} from 'react';
import './Login.css';

import logo from '../assets/Logo-Tinder.png';

export default function Login() {

    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        console.log(username);
    }

    return (
        <div className= "login-container">
          <form onSubmit = {handleSubmit}>
            <img src= {logo} alt="Tindev"/>
            <input 
                placeholder="Digite seu usuario do Github"
                value= {username}
                onChange= {e => setUsername(e.target.value)}
            />
            <button type = "submit"> Enviar</button>
          </form>
        </div>
    );
}