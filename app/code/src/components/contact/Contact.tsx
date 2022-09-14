import { Box, Button, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import "./contact.css"

function Contact() {

    const MyContactWrapper = styled(Box)(({ theme }) => {
        return {
            height: "65vh",
            backgroundColor: "lightblue",
            position: "relative",
            // marginTop: "30px"
        }
    })

    const MyContactFormTitle = styled(Typography)(({ theme }) => {
        return {
            textAlign: "center"
        }
    })
     

    const MyContactForm = styled(Box)(({ theme }) => {
        return {
            display: "block",
            alignItems: "center",
            width: "35%",
            position: "absolute",
            top: "9rem",
            right: "10px",
            [theme.breakpoints.down('sm')]: {
                width: "100%",
                left: "0px",
            }
        }
    })

    const MyTextField = styled(TextField)(({ theme }) => {
        return {
            [theme.breakpoints.down('sm')]: {
                width: "90%",
                marginLeft: "20px",
                marginRight: "10px",
                marginTop: "5px"
            }
        }
    })


    const MyBox = styled(Box)(({ theme }) => {
        return {
            display: "flex",
            marginTop: "10px",
            justifyContent: "space-between",
            [theme.breakpoints.down('md')]: {
               display: "block",
            //    marginTop: "10px"
            }
        }
    })


    const MyBoxTextArea = styled(Box)(({ theme }) => {
        return {
            marginTop: "10px",
            [theme.breakpoints.down('md')]: {
                width: "100%"
            }
        }
    })

    const MySubmitButton = styled(Button)(({ theme }) => {
        return {

            marginTop: "2px",
            position: "absolute",
            // top: "1px",
            right: "40%",
            [theme.breakpoints.down('md')]: {
                // right: "22%"
            }
        }
    })
    return (
        <React.Fragment>
            <MyContactWrapper id="contact">
                <MyContactForm>
                    <MyContactFormTitle>Let's connect</MyContactFormTitle>
                    <MyBox>
                        <MyTextField  required label="your name " variant='outlined' size='small' />
                        <MyTextField  required label="your@email.com" variant='outlined' size='small' />
                    </MyBox>
                    <MyBoxTextArea>
                        <MyTextField rows={5} multiline required fullWidth label="type message here to reach out to me ..." variant='outlined' size='small' />
                    </MyBoxTextArea>
                    <MySubmitButton className='submit-btn' variant='outlined' size='small'>send</MySubmitButton>
                </MyContactForm>
                
            </MyContactWrapper>
        </React.Fragment>
    )
}

export default Contact