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

    useEffect(() => {
        const languageAnimate = document.querySelector('#languageAnimate')
        init(languageAnimate, { showCursor: false, strings: ['Java', 'JavaScript', 'TypeScript'] })

        // const paradigm_animate = document.querySelector('#paradigm_animate')
        // init(paradigm_animate, { showCursor: false, strings: ['Object-Oriented programming', 'Functional programming', 'Multithreaded-programming'] })

    }, [])

    return (

        <React.Fragment >
            <IntroContainer className="intro_container">
                <div className="intro_right_side">
                    <img className='profile' src={me} alt="profile" />

                </div>
                <div className="intro_left_side">
                    <div className="intro_text_top">
                        <div className="greetings">Thanks for tuning in, I am
                            <span id='first_name'> Franck </span> <span id="last_name">Nsabimana</span>
                        </div>
                        <div>
                            <span className='greetings'>I am a </span> <span className="profession">Software </span> <span className="profession">Developer,</span>
                        </div>
                        <div className="action">
                            <span className='greetings'>I use </span> <span className='tool' id="languageAnimate">Java</span>
                        </div>
                    </div>
                    <div className="intro_text_bottom">
                        <span className='favorites_paradigms'></span>
                        {/* <span className='programming_paragigm' id='paradigm_animate'>OOP</span> */}
                        <div className='tool'>
                        My favorite programming paradigms are: <br/>
                            OO programming, Functional programming and <span style={{marginLeft: "7rem", transform: "rotateY(10deg)"}}>Multithreaded-programming</span> </div>
                    </div>
                </div>
            </IntroContainer>
        </React.Fragment>
    )
}

export default Intro