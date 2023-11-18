import React from 'react'
import logo from "../../assets/images/spotify-logo-white.png";

const Autheader = () => {
  return (
    <div className='autheader p-4'>
        <div className="card d-flex flex-row align-items-center border-0 rounded-0 bg-transparent">
          <img src={logo} width="60" className="object-fit-cover rounded" alt="spotify logo" />
          <h4 className='text-white mt-2'>Spotify</h4>
        </div>
    </div>
  )
}

export default Autheader