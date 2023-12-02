import React, { useEffect, useState } from 'react'
import AuthCard from "./AuthCard";
import Autheader from "./Autheader";
import { useLocation } from 'react-router-dom';

const Signup = () => {

  const [authApi, setAuthApi] = useState(false)
  const location = useLocation();
  const isSignup = location.pathname === '/signup';
  
  useEffect(()=>{
    setAuthApi(isSignup)
  }, [isSignup])

  return (
    <div className="authPage">
        <Autheader/>
        <AuthCard isSignup={authApi}/>
    </div>
  )
}

export default Signup