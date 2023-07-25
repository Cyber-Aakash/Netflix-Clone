import React, { useRef } from 'react';
import { auth } from "../firebase.js";
import "./SignupScreen.css";

function SignupScreen() {
    const emailref = useRef(null);
    const passwordref = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();
    };


  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref = {emailref} placeholder='Email' type='email'/>
            <input  ref = {passwordref} placeholder='Password' type='password'/>
            <button type='submit' onClick={signIn}>Sign In</button>

            <h4>
                <span className='signupScreen__gray'>New to Netflix? </span>
                <span className='signupScreen__link' onClick={register}>Sign up now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignupScreen