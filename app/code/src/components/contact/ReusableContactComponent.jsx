import { ArrowBack, Send } from '@mui/icons-material'
import { Button, IconButton, Link, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import AppBar from '../app-bar/AppBar'

function ReusableContactComponent() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const handleClick = (e) => {
       navigate("/")
    }

    const submitMessage = (e) => {
        const concantenatedMessage = "Name: "+name+ ", Email: " +email+ ", Message: " +message;

        const isSure = window.confirm('are you sure you wanna send this email?')
        if(isSure){
            alert(concantenatedMessage)
        }else{
            alert("Aborted")
        }
    }
    return (
        <div className="wrapper">
            <AppBar />
            <div className="main_background">
                <div className='contact_wrapper'>
                    <div className="name_email">
                        <TextField onChange={(e) => setName(e.target.value)} value={name} color='error' className='name_input' label="name" placeholder='your name' />
                        <TextField onChange={(e) => setEmail(e.target.value)} value={email} color='error' className='email_input' label="email" placeholder='your-email@email.com' />
                    </div>
                    <div className="message">
                        <TextField onChange={(e) => setMessage(e.target.value)} value={message} color='error' multiline fullWidth rows={5} label="message" placeholder='type your message here ...' />
                    </div>

                    <div className="submit">
                        <div>
                            <IconButton onClick={handleClick}>
                                <ArrowBack className='back_arrow' />
                            </IconButton>
                        </div>
                        <Button onClick={submitMessage} variant='contained' className="submit_button" endIcon={<Send />}>send </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReusableContactComponent