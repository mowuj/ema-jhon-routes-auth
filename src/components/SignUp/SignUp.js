import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form action="">
                    <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" id="" required/>
                </div>
                <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='account-text'>
                    Already Have an account?<Link className='form-link' to="/login">Login</Link>
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

export default SignUp;