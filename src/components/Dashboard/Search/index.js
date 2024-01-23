import React, {useState} from 'react'
import "./style.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search({search, searchChanged}) {

  return (
    <div className='search-bar'>
        <SearchOutlinedIcon />
        <input type='text' placeholder='Search' value={search} onChange={(e) => searchChanged(e.target.value)}/>
    </div>
  )
}

export default Search