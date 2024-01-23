import React, { useState } from 'react'
import "./style.css"

function CoinInfo({ heading, desc }) {

  const shortDesc = desc.slice(0, 300) + "<p  class='read'>Read More...</p>";
  const largeDesc = desc + "<p  class='read'>Read Less...</p>";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='coin-information' onClick={() => setIsOpen(!isOpen)}>
      <h2>{heading}</h2>

      {
        (desc.length > 300) ? <p dangerouslySetInnerHTML={{ __html: !isOpen ? shortDesc : largeDesc }} className='coin-description' /> : <p dangerouslySetInnerHTML={{ __html: desc }} className='coin-description' />
      }
      
    </div>
  )
}

export default CoinInfo