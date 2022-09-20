import { Box, Button, styled, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import { Chat } from '@mui/icons-material';

function Contact() {

    
    const form = useRef();

    // user_name: is used for name
    // user_email: is used for email origin address

    // message: is used for message
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qa0kuvb', 'template_x9daifj', form.current, 'csI6U3DLPILQ6sPFN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }).then((e) => {
                console.log("email sent: ", e)
            }).catch((e) => {
                console.log("exception occurred: " , e)
            })
    };
    return (
        <React.Fragment>
            <div className='contact_form_container'>
                <TextField  />

                <div >
                <Chat className='chat_icon'/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact