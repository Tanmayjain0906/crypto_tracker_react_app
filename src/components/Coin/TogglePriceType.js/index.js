import React, { useState } from 'react'
import "./style.css"

function TogglePriceType({priceType, handleChangePriceType}) {

  return (
    <div className='type-btn-container'>
        <button id='btn-1' className={priceType == "prices" ? "active" : "btns"} onClick={() => handleChangePriceType("prices")}>Price</button>
        <button id='btn-2' className={priceType == "market_caps" ? "active" : "btns"} onClick={() => handleChangePriceType("market_caps")}>Market Cap</button>
        <button id='btn-3' className={priceType == "total_volumes" ? "active" : "btns"} onClick={() => handleChangePriceType("total_volumes")}>Total Volume</button>
    </div>
  )
}

export default TogglePriceType