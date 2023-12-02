import React, { useContext } from 'react'
import "./search.css"
import DefaultSection from '../../components/home/DefaultSection'
import BrowseSection from '../../components/search/BrowseSection'
import headerContext from '../../context/headerContext'
import SearchMenu from '../../components/search/SearchMenu'

const Search = () => {

  const {searchMenu} = useContext(headerContext)

  return (
    <div className='searchPage pageContent card bg-transparent rounded-0 border-0 p-3'>
       {searchMenu && (<><SearchMenu/></>)}
       <DefaultSection route="/section" heading="Recently searches" sectionShape="" />
       <BrowseSection />
    </div>
  )
}

export default Search