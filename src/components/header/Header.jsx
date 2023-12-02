import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {icons} from "../../api/icons"
import "./header.css";
import headerContext from '../../context/headerContext';

const Header = () => {

  const {setSearchMenu} = useContext(headerContext)
  const [isSearch, setIsSearch] = useState(false)
  const location = useLocation();
  const searchPage = location.pathname === '/search';

  const handleSearch = () => {
    if(searchPage){
      setSearchMenu(true)
    }else{
      setSearchMenu(false)

    }
  }
  
  useEffect(()=>{
    setIsSearch(searchPage)
    setSearchMenu(false)
  }, [searchPage, setSearchMenu])

  return (
    <div className='header z-1 position-sticky top-0 d-flex align-items-center justify-content-between p-3'>
       <div className="angleIconsSearch d-flex align-items-center gap-3">
          <div className="angleIcons d-flex gap-2">
            <span className='rounded-pill text-light text-center'>{icons.leftAngle}</span> 
            <span className='rounded-pill text-light text-center'>{icons.rightAngle}</span>
          </div>
          {
            isSearch && (
              <> 
                <div className="headerSearch">
                  <div className="input-group d-flex flex-nowrap align-items-center rounded-pill px-3">
                    <label htmlFor="search" className='text-light'>{icons.search}</label>
                    <input type="text" onChange={handleSearch} name="search" id="search" autoComplete='off' className="w-100 border-0 bg-transparent shadow-none" placeholder='What do you want to listen to?' />
                  </div>
                </div>
              </>
            )
          }
       </div>
       <div className="actionButtons d-flex align-items-center gap-2">
          <Link to={"link"} className="explore rounded-pill bg-white text-dark border-0 p-2 px-3">Explore Premium</Link>
          <Link to={"link"} className="installapp text-white rounded-pill border-0 p-2 px-3"><span className='me-2'>{icons.download}</span>Install App</Link>
          <Link to={"link"} className="bell profileBell rounded-circle border-0"><span>{icons.bell}</span></Link>
          <Link to={"link"} className="profile profileBell rounded-circle border-0"><span>{icons.profile}</span></Link>
       </div>
    </div>
  )
}

export default Header