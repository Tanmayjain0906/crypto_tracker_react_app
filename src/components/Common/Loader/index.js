import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import "./style.css"

function Loader() {
  return (
    <div className='loader-icon'><CircularProgress style={{color: "var(--blue)"}}/></div>
  )
}

export default Loader