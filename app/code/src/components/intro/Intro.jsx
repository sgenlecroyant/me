import React, { useEffect, useRef } from 'react'
import { styled, Typography } from '@mui/material'
import './intro.css'
import { KeyboardArrowDown, FavoriteRounded } from '@mui/icons-material'
import { init } from 'ityped'
import me from '../../assets/images/selfie 2.jpg'
import { Box } from '@mui/system'


function Intro(props) {

    const IntroContainer = styled(Box)(({ theme }) => {
        return {
            display: "flex",
            justifyContent: "space-between",
            height: "80vh"
        }
    })
    const scrollSkills = (event) => {
        console.log("scrolling to skills")
    }

    const handleScrollOnClick = (event) => {
        const destinationView = document.getElementById('skills')
        destinationView.scrollIntoView({ behavior: "smooth" })
    }
    return (

        <React.Fragment>
            <IntroContainer className="intro_container">
                <div className="intro_right_side">
                    <img className='profile' src={me} alt="profile"  />
                    
                </div>
                <div className="intro_left_side">left</div>
            </IntroContainer>
        </React.Fragment>
    )
}

export default Intro