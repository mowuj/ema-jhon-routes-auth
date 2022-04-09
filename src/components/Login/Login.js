import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
        ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <p style={{color:'red'}}>{ error?.message}</p>
                {
                    loading && <p>Loading...</p>
                }
                <form action="" onSubmit={handleUserSignIn}>
                    <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                </div>
                <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='account-text'>
                    New to Ema-John?<Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='or'>
                    <div className='or-style'></div>
                    or
                    <div className='or-style'></div>
                </div>
                    <button className='google-btn'><FcGoogle className='icon'></FcGoogle> <span className='icon-text'>Continue with Google</span> </button>
                
            </div>
        </div>
    );
};

export default Login;