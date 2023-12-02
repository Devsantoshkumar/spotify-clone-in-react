import React from 'react'
import "./home.css";
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Playhead from '../../components/playHead/Playhead'

const Home = () => {
  return (
    <div className='container-fluid homePage'>
       <div className="row p-2">
          <Sidebar />
          <div className="col position-relative rounded content">
            <Header />
            <Outlet/>
          </div>
       </div>
       <Playhead/>
    </div>
  )
}

export default Home