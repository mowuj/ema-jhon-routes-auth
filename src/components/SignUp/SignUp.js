import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init'
const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)
    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Your passwords did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email,password)
            
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <p style={{color:"red"}}>{ error}</p>
                
                <form action="" onSubmit={handleCreateUser}>
                    <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
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