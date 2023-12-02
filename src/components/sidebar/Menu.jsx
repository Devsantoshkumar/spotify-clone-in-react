import React from 'react'
import { Link } from 'react-router-dom'
import {icons} from "../../api/icons.js"
import "./menu.css"

const Menu = () => {

  return (
    <div className='menu p-4 py-2 rounded'>
        <Link to={'/'} className='d-block text-decoration-none py-2 text-white'>{icons.home} <span className='ms-3 pt-1'>Home</span></Link>
        <Link to={'search'} className='d-block text-decoration-none py-2 text-white'>{icons.search} <span className='ms-3'>Search</span></Link>
    </div>
  )
}

export default Menu