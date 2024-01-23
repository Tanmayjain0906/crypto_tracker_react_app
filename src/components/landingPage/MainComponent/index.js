import React from 'react'
import Button from "../../Common/Button"
import iphone from "../../../assets/phone.svg"
import gradient from "../../../assets/gradient.svg"
import { motion } from 'framer-motion'
import "./style.css"

function MainComponent() {
    return (
        <div className='main-container'>
            <div className='left-info'>

                {/* //adding animation  */}
                <motion.h1 className='head-1' initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>Track Crypto</motion.h1>


                <motion.h1 className='head-2' initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}>Real Time.</motion.h1>


                <motion.p className='info' initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.25 }}>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p >


                <motion.div className='button-container' initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}>
                    <Button text={"Dashboard"} />
                    <Button text={"Share"} outline={true} />
                </motion.div>


            </div>
            <div className='phone-container'>

                <motion.img src={iphone} className='iphone' initial={{ y: -10 }} animate={{ y: 0 }} transition={{ type: "smooth", repeatType: "mirror", duration: 2, repeat: Infinity, }} />


                <img src={gradient} className='gradient' />
            </div>
        </div>
    )
}

export default MainComponent