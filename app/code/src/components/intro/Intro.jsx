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
                <div className="intro_left_side">
                    <div className="greetings">Thanks for tuning in, I am 
                    <span id='first_name'> Franck </span> <span id="last_name">Nsabimana</span> 
                    </div>
                    <div className="profession">
                        I am a <span>Software </span> <span>Developer.</span>
                    </div>
                    <div className="action">
                        <span>I use </span> <span>Java</span>
                    </div>
                    <div className="action">
                        <span>My favorite programming paradigms are </span> <span>OOP</span>
                    </div>
                </div>
            </IntroContainer>
        </React.Fragment>
    )
}

export default Intro