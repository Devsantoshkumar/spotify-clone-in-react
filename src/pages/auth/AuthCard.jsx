import React from 'react'
import { Link } from 'react-router-dom';
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import apple from "../../assets/images/apple.png";
import AuthApiCards from './AuthApiCards';


const AuthCard = ({isSignup}) => {
  return (
    <div className='container-fluid'>
        <div className="row py-md-4 py-0">
            <div className="col-12 col-lg-6 col-md-8 p-0 m-auto">
                <div className="card authCard p-5 py-0 py-md-5">
                    <h1 className='text-start text-md-center text-white py-3 fw-bold'>{ isSignup ? "Sign up to start listening" : "Log in to Spotify" }</h1>
                    <AuthApiCards align="col text-start" logo={google} name="Continue with Google"/>
                    <AuthApiCards align="col text-start" logo={facebook} name="Continue with Facebook"/>
                    {
                    !isSignup && (
                        <AuthApiCards align="col text-start" logo={apple} name="Continue with Apple" />
                    )
                    }
                    {
                    !isSignup && (
                        <AuthApiCards align="col text-center" name="Continue with Phone Number" />
                    )
                    }

                    <hr className='my-5 text-light'/>

                    <div className="row">
                        <div className="col-11 p-0 col-lg-6 m-auto">
                            <form action="">
                                <label htmlFor="email" className='text-light mb-2 authLabel'>Email or username</label>
                                <div className="input-group authInput">
                                    <input type="text" className='form-control shadow-none' placeholder='Email or username' />
                                </div>
                                {
                                   !isSignup && (<>
                                    <label htmlFor="password" className='text-light mb-2 mt-4 authLabel'>Password</label>
                                    <div className="input-group authInput">
                                        <input type="password" className='form-control shadow-none' placeholder='Password' />
                                    </div>
                                    <div className="form-check form-switch mt-4 authCheck">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    <label className="form-check-label authLabel text-light" htmlFor="flexSwitchCheckChecked">Remember me</label>
                                    </div>
                                   </>)
                                }
                                <div className="input-group mt-4 authButton">
                                    <button className='border-0 rounded-pill w-100 fw-bold'>Log In</button>
                                </div>
                                {
                                    !isSignup && (
                                    <div className="input-group text-center mt-4">
                                        <Link to={"/forgot-password"} className="text-white m-auto">Forgot your Password ?</Link>
                                    </div>
                                    )
                                }
                            </form>
                        </div>
                    </div>
                    <hr className='mt-4 text-light'/>
                    <p className='text-center mt-4 text-dark-emphasis'>{isSignup ? "Already have an account?" : "Don't have an account?"} <Link to={isSignup ? "/login": "/signup"} className='text-white'>{isSignup ? "Log in here." : "Sign up for Spotify"}</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthCard