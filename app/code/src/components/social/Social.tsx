import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import './social.css'
function Social() {

    const MySocialWrapper = styled(Box)(({theme}) => {
        return {
            height: "70vh",
            backgroundColor: "lightblue",
        }
    })

    const MySocialTitle = styled(Box)(({theme}) => {
        return {
            paddingTop: "120px",
            fontWeight: "600",
            fontSize: "20px",
            fontStyle: "normal"
        }
    })

    const MySocialNetworksIcons = styled(Box)(({theme}) => {
        return {
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            // alignContent: "center"
        }
    })
  return (
    <MySocialWrapper id='social' style={{textAlign: "center"}}>
        <MySocialTitle>You can hit me up on any of these platforms</MySocialTitle>
        <MySocialNetworksIcons>
            <div className='net-icon'>
                {/* https://www.facebook.com/sgenlecroyant */}
                <a style={{color: "rgb(13, 13, 46)"}} href="https://www.facebook.com/sgenlecroyant" target={'_blank'}><Facebook/></a>
            </div>
            <div className='net-icon'>
                {/* https://twitter.com/sgenlecroyant */}
                <a style={{color: "rgb(13, 13, 46)"}} href="https://twitter.com/sgenlecroyant" target={'_blank'}><Twitter/></a>
                
            </div>
            <div className='net-icon'>
                {/* https://github.com/sgenlecroyant */}
                <a style={{color: "rgb(13, 13, 46)"}} href="https://github.com/sgenlecroyant" target={'_blank'}><GitHub/></a>

            </div>
            <div className='net-icon'>
                {/* https://www.instagram.com/sgenlecroyant/ */}
                <a style={{color: "rgb(13, 13, 46)"}} href="https://www.instagram.com/sgenlecroyant" target={'_blank'}><Instagram/></a>


            </div>
            <div className='net-icon'>
                {/* https://www.linkedin.com/in/sgenlecroyant/ */}
                <a style={{color: "rgb(13, 13, 46)"}} href="https://www.linkedin.com/in/sgenlecroyant" target={'_blank'}><LinkedIn/></a> 
            </div>
            
        </MySocialNetworksIcons>
    </MySocialWrapper>
  )
}

export default Social