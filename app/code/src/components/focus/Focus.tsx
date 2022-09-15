import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import './focus.css'

function Focus() {

    const MyFocusWrapper = styled(Box)(({ theme }) => {
        return {
            color: "inherit",
            width: "100vw",
            height: "22vh",
            backgroundColor: "lightblue",
            paddingTop: "110px"

        }
    })

    const MyFocusInnerWrapper = styled('ul')(({ theme }) => {
        return {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
            color: "inherit",
            fontFamily: "monospace",
            marginTop: "50px",
            fontSize: "20px",
            fontWeight: "900"

        }
    })
  return (
    <div id='focus'>
        <MyFocusWrapper className='focus-wrapper'>
            <Typography textAlign={'center'} style={{fontFamily: "monospace", display: "block", borderBottom: "3px solid black",paddingBottom: "0px", margin: "0px auto", backgroundColor: "", width: "190px"}}>I mainly focus on: </Typography>
            <MyFocusInnerWrapper className='wrapper'>
                <li>Backend Development</li>
                <li>Microservices</li>
                <li>Distributed Systems</li>
                <li>Big Data</li>
            </MyFocusInnerWrapper>
        </MyFocusWrapper>
    </div>
  )
}

export default Focus