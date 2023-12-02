import React from 'react'
import { Link } from 'react-router-dom'
import "./browsecard.css"

const BrowseCard = ({title, image, route, color}) => {
  return (
    <div className='col'>
        <Link to={route} className={`card text-decoration-none ${color} browseCard px-3 border-0 position-relative shadow-sm`}>
            <h4 className='text-light fw-bold my-2 mt-3'>{title}</h4>
            <div className="position-absolute browseCardImage">
                <img src={image} className='object-fit-cover' alt="" />
            </div>
        </Link>
    </div>
  )
}

export default BrowseCard