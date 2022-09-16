import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import './focus.css'
import image from '../../assets/images/clippy.png'

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
        <React.Fragment>
            <div className='clippy-cont '>
                <div className='clippy'>clippy</div>

                {/* <img className='clippy' src={image} alt="test clippy" /> */}
            </div>

        </React.Fragment>
    )
}

export default Focus