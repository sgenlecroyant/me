import { TextField } from '@mui/material'
import React from 'react'

function Contact() {
    return (
        <div className="main_background">
            <div className='contact_wrapper'>
                <div className="name_email">
                    <TextField className='name_input' label="name" placeholder='your name' />
                    <TextField className='email_input' label="email" placeholder='your-email@email.com' />
                </div>
                <div className="message">
                    <TextField multiline fullWidth rows={5} label="message" placeholder='type your message here ...' />
                </div>
            </div>
        </div>
    )
}

export default Contact