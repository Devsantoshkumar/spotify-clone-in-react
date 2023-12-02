import React from 'react'
import { Link } from 'react-router-dom'
import "./browsesection.css"
import BrowseCard from '../browseCard/BrowseCard'
import singer1 from "../../assets/images/singer1.jpg"
import singer2 from "../../assets/images/singer2.jpg"
import singer3 from "../../assets/images/singer3.jpg"
import singer4 from "../../assets/images/singer4.jpg"
import singer5 from "../../assets/images/singer5.jpg"

const BrowseSection = () => {
  return (
    <div>
        <h4 className='text-light d-flex align-items-center justify-content-between'><span>Browse All</span> <Link to={"route"} className='showAll text-decoration-none'>Show All</Link></h4>
        <div className="row row-cols-md-3 row-cols-lg-4 row-cols-xlg-5 gy-3 my-3 mt-1">
        <BrowseCard title="Title name" image={singer1} route="/page" color="browseOrange" />
        <BrowseCard title="Title name" image={singer3} route="/page" color="browseIndigo" />
        <BrowseCard title="Title name" image={singer4} route="/page" color="browseGray" />
        <BrowseCard title="Title name" image={singer5} route="/page" color="browseBrown" />
        <BrowseCard title="Title name" image={singer2} route="/page" color="browseRed" />
        <BrowseCard title="Title name" image={singer3} route="/page" color="browseIndigo" />
        <BrowseCard title="Title name" image={singer1} route="/page" color="browseOrange" />
        <BrowseCard title="Title name" image={singer4} route="/page" color="browseGray" />
        </div>
    </div>
  )
}

export default BrowseSection