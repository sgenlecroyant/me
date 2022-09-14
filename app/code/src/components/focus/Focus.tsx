import { Box, styled, Typography } from '@mui/material'
import React from 'react'

function Focus() {

    const MyFocusWrapper = styled(Box)(({ theme }) => {
        return {
            color: "inherit",
            width: "100vw",
            height: "70vh",
            backgroundColor: "lightblue",
            paddingTop: "180px"

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
        <MyFocusWrapper>
            <Typography textAlign={'center'} style={{fontFamily: "monospace"}}>I mainly focus on: </Typography>
            <MyFocusInnerWrapper>
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