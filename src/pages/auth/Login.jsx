import React from 'react'
import "./auth.css";
import Autheader from './Autheader'
import AuthCard from "./AuthCard"

const Login = () => {
  return (
       <div className="authPage">
        <Autheader/>
        <AuthCard/>
       </div>
  )
}

export default Login