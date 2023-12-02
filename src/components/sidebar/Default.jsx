import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../api/icons'
import "./default.css"

const Default = () => {
  return (
    <div className='sidebarDefault rounded z-2 my-2 mb-0 p-2'>

        <div className="card border-0 d-flex flex-row justify-content-between p-3 py-2 mb-3 bg-transparent">
            <h6 className='text-light'>{ icons.listBar } <span className='ms-2'>Your Library</span></h6>
            <div className="sideDefaultIcon d-flex gap-3 text-light">
                <span className="plus">{icons.plus}</span>
                <span className="back">{icons.arrowRight}</span>
            </div>
        </div>

        <div className="card createPlaylist border-0 p-3">
            <h6 className='text-white'>Create your first playlist</h6>
            <p className='text-white'>It's easy, we'll help you</p>
            <Link to={"create-playlist"} className="rounded-pill text-decoration-none text-dark d-block border-0 bg-white w-50 p-2">Create Playlist</Link>
        </div>

        <div className="card createPlaylist border-0 mt-4 p-3">
            <h6 className='text-white'>Let's find some podcasts to follow</h6>
            <p className='text-white'>We'll keep you updated on new episodes</p>
            <Link to={"section"} className="rounded-pill text-decoration-none text-dark d-block border-0 bg-white w-50 p-2">Browse podcasts</Link>
        </div>
    </div>
  )
}

export default Default