import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../profileCard/Card'
import singer1 from "../../assets/images/singer1.jpg";
import singer2 from "../../assets/images/singer2.jpg";
import singer3 from "../../assets/images/singer3.jpg";
import singer4 from "../../assets/images/singer4.jpg";

const DefaultSection = ({route, heading, sectionShape}) => {
  return (
    <div className="mb-5">
        <h4 className='text-light d-flex align-items-center justify-content-between'><span>{heading}</span> <Link to={route} className='showAll text-decoration-none'>Show All</Link></h4>
        <div className="row row-cols-md-3 row-cols-lg-4 row-cols-xlg-5 gy-3 my-3 mt-1">
            <Card route="/page" image={singer1} title="Singer name" text="About the song name." shape={sectionShape}/>
            <Card route="/page" image={singer2} title="Singer name" text="About the song name." shape={sectionShape}/>
            <Card route="/page" image={singer3} title="Singer name" text="About the song name." shape={sectionShape}/>
            <Card route="/page" image={singer4} title="Singer name" text="About the song name." shape={sectionShape}/>
        </div>
    </div>
  )
}

export default DefaultSection