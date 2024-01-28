import React from 'react'
import "./style.css"
import { motion } from 'framer-motion';
import { FacebookShareButton, WhatsappShareButton, EmailShareButton, LineShareButton, TwitterShareButton } from "react-share";

import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {

    const shareUrl = "https://cryptotracker-react-app-beige.vercel.app/"
    return (
        <motion.div className='footer-container' initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <h3 style={{ color: "#f3f3f3" }}>CryptoTracker.</h3>

            <div className='social-media'>
                <FacebookShareButton url={shareUrl} quote={"CryptoTracker."}>
                    <FaFacebook color='#f3f3f3' size={25} />
                </FacebookShareButton>

                <WhatsappShareButton url={shareUrl} quote={"CryptoTracker."}>
                    <FaWhatsapp color='#f3f3f3' size={25} />
                </WhatsappShareButton>

                <EmailShareButton url={shareUrl} quote={"CryptoTracker."}>
                    <MdEmail color='#f3f3f3' size={25} />
                </EmailShareButton>

                <LineShareButton url={shareUrl} quote={"CryptoTracker."}>
                    <FaLinkedin color='#f3f3f3' size={25} />
                </LineShareButton>

                <TwitterShareButton url={shareUrl} quote={"CryptoTracker."}>
                    <FaTwitter color='#f3f3f3' size={25} />
                </TwitterShareButton>
            </div>
        </motion.div>
    )
}

export default Footer