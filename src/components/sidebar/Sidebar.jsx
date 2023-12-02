import React from 'react'
import "./sidebar.css";
import Menu from './Menu';
import Default from './Default';

const Sidebar = () => {
  return (
    <div className="col-3 rounded me-2 p-0 sidebar">
         <Menu/>
         <Default/>
    </div>
  )
}

export default Sidebar