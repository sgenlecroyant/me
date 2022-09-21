import { ArrowBack, Send } from '@mui/icons-material'
import { Button, IconButton, TextField } from '@mui/material'
import React from 'react'

function ReusableContactComponent() {
  return (
    <div className="main_background">
            <div className='contact_wrapper'>
                <div className="name_email">
                    <TextField color='error' className='name_input' label="name" placeholder='your name' />
                    <TextField color='error' className='email_input' label="email" placeholder='your-email@email.com' />
                </div>
                <div className="message">
                    <TextField color='error' multiline fullWidth rows={5} label="message" placeholder='type your message here ...' />
                </div>

                <div className="submit">
                    <div>
                      <IconButton>
                      <ArrowBack className='back_arrow'/>
                      </IconButton>
                    </div>
                    <Button variant='contained' className="submit_button" endIcon={<Send/>}>send </Button>
                </div>
            </div>
        </div>
  )
}

export default ReusableContactComponent