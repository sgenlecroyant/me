import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import '../../components/contact/aboutMe.css'

function AboutMe() {

    const [open, setOpen] = useState(true)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '200px',
        left: '50px',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
       
      };
    return (
        <div className='about_me_container'>
            {/* <div className='about_me_title'>A little bit about me</div>

            <div className="about_me_content">
                I am passionate about computer programming,
                I learn very quickly and I love talking about tech.
                In fact, I love sharing what I know with others and ask if there is anything that I don't know.
                I primarily code in Java and some of my favorite software development topics
                are Design Patterns, Software Development Principles and multi-threading
            </div> */}

            <Modal style={style}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={{style}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>


        </div>
    )
}

export default AboutMe