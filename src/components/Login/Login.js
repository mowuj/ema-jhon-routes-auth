import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form action="">
                    <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='signup-p'>
                    New to Ema-John?<Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <p className='signup-p'>---------------or---------------</p>
                <div className='icon-container'>
                    <p ><FcGoogle className='icon'></FcGoogle></p>
                    <p className='icon-text'> Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;