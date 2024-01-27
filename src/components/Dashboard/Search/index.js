import React, { useState } from 'react'
import "./style.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { motion } from 'framer-motion';

function Search({ search, searchChanged }) {

  return (
    <motion.div className='search-bar' initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}>
      <SearchOutlinedIcon />
      <input type='text' placeholder='Search' value={search} onChange={(e) => searchChanged(e.target.value)} />
    </motion.div>
  )
}

export default Search