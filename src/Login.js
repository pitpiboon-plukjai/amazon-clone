import React, { useState } from 'react'
import './Login.css'
import {Link} from "react-router-dom"
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';


function Login() {
    // const history = useHistory();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            navigate('/')
        }).catch(error => alert(error.message))

        // Some fancy firebase login ...
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //It successfully create a new user iwth email and password
            console.log(auth);
            if(auth){
                // history.pushState('/')
                navigate('/')
            }
        }).catch(error => alert(error.message))
        //Do some fancy firebase register ...
    }

    return (
        <div className="login">
            <Link to='/'>

            <img 
                className="login__logo"
            
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png' 
                
            />

            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn}

                        className='login__signInButton'>Sign In
                    
                    </button>

                </form>

                <p>

                    By signing-in you agree to Amazon-clone's Conditions of Use & Sale. Please see our Privacy Notice, 
                    our Cookies Notice and our Interest-Based Ads Notice. 
                </p>

                <button type="submit" onClick={register}


                    className="login__registerButton">Create your Amazon Account
                
                
                </button>


            </div>
            
        </div>
    )
}

export default Login
