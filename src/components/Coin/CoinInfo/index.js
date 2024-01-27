import React, { useState } from 'react'
import "./style.css"
import { motion } from 'framer-motion';

function CoinInfo({ heading, desc }) {

  const shortDesc = desc.slice(0, 300) + "<p  class='read'>Read More...</p>";
  const largeDesc = desc + "<p  class='read'>Read Less...</p>";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className='coin-information' onClick={() => setIsOpen(!isOpen)} initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1}}>
      <h2>{heading}</h2>

      {
        (desc.length > 300) ? <p dangerouslySetInnerHTML={{ __html: !isOpen ? shortDesc : largeDesc }} className='coin-description' /> : <p dangerouslySetInnerHTML={{ __html: desc }} className='coin-description' />
      }

    </motion.div>
  )
}

export default CoinInfo