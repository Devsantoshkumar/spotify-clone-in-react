import React from 'react'
import { Link } from 'react-router-dom';
import "./searchmenu.css";

const SearchMenu = () => {
  return (
    <div className='searchMenus mb-4'>
       <ul className='d-flex align-items-center list-unstyled gap-3 m-0'>
        <li className='text-light rounded-pill px-3 py-2'><Link to={"/"} className='d-block w-100 text-decoration-none text-light'>All</Link></li>
        <li className='text-light rounded-pill px-3 py-2'><Link to={"/"} className='d-block w-100 text-decoration-none text-light'>Songs</Link></li>
        <li className='text-light rounded-pill px-3 py-2'><Link to={"/"} className='d-block w-100 text-decoration-none text-light'>Albums</Link></li>
        <li className='text-light rounded-pill px-3 py-2'><Link to={"/"} className='d-block w-100 text-decoration-none text-light'>Playlists</Link></li>
        <li className='text-light rounded-pill px-3 py-2'><Link to={"/"} className='d-block w-100 text-decoration-none text-light'>Profiles</Link></li>
        <li className='text-light rounded-pill px-3 py-2'><Link to={"/"} className='d-block w-100 text-decoration-none text-light'>Podcasts & Shows</Link></li>
        <li className='text-light rounded-pill px-3 py-2'><Link to={"/"} className='d-block w-100 text-decoration-none text-light'>Artists</Link></li>
       </ul>
    </div>
  )
}

export default SearchMenu