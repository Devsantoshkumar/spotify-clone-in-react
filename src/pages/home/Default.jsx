import React from 'react'
import "./default.css";
import DefaultSection from '../../components/home/DefaultSection'

const Default = () => {
  return (
    <div className='p-3 m-0 pageContent'>
       <DefaultSection route="/section" heading="Recently played" sectionShape="" />
       <DefaultSection route="/section" heading="Popular artists" sectionShape="-circle"/>
    </div>
  )
}

export default Default