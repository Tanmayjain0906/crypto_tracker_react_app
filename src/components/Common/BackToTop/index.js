import React, { useState } from 'react'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import "./style.css"

function BackToTop() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 10) {
            setVisible(true)
        }
        else if (scrolled <= 10) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className='back-to-top' onClick={scrollToTop} style={{display: visible ? "block" : "none"}}>
            <ArrowUpwardOutlinedIcon style={{ color: "var(--blue)", width: "2rem", height: "2rem" }} />
        </div>
    )
}

export default BackToTop;