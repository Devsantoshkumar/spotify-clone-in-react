import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"

const Card = ({route, image, title, text, shape}) => {
  return (
    <div className='col'>
        <Link to={route} className="card itemCard p-3 shadow-sm">
           <img src={image} className={`card-img-top object-fit-cover rounded${shape} shadow`} alt="..." />
            <h6 className='text-light my-2 mt-3'>{title}</h6>
            <p className=''>{text}</p>
        </Link>
    </div>
  )
}

export default Card