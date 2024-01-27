import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./style.css";
import Button from '../../Common/Button';
import { FacebookShareButton, WhatsappShareButton, EmailShareButton, LineShareButton, TwitterShareButton } from "react-share";

import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'var(--black)',
  color: "var(--white)",
  boxShadow: 24,
  p: 4,
  fontWeight: "900",
  fontFamily: "Inter",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
};

export default function ShareModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const shareUrl = "https://cryptotracker-react-app-beige.vercel.app/"
  return (
    <div>
      <div onClick={handleOpen} className='modal-btn'>
        <Button text={"Share"} outline={true} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontFamily: "Inter" }}>
              CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
            </Typography>
            <div className='social-media'>
              <FacebookShareButton url={shareUrl} quote={"CryptoTracker."}>
                <FaFacebook color="var(--white)" size={25} />
              </FacebookShareButton>

              <WhatsappShareButton url={shareUrl} quote={"CryptoTracker."}>
                <FaWhatsapp color="var(--white)" size={25} />
              </WhatsappShareButton>

              <EmailShareButton url={shareUrl} quote={"CryptoTracker."}>
                <MdEmail color="var(--white)" size={25} />
              </EmailShareButton>

              <LineShareButton url={shareUrl} quote={"CryptoTracker."}>
                <FaLinkedin color="var(--white)" size={25} />
              </LineShareButton>

              <TwitterShareButton url={shareUrl} quote={"CryptoTracker."}>
                <FaTwitter color="var(--white)" size={25} />
              </TwitterShareButton>
            </div>
          </Box>
        

      </Modal>
    </div>
  );
}