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
                <input type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
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