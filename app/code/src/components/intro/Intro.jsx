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
            height: "80vh",
            [theme.breakpoints.down('sm')]: {
                height: "55vh"
            }
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
        init(languageAnimate, { showCursor: false, strings: ['Java', 'JavaScript', 'TypeScript'],backDelay: 1500,
        backSpeed:150,typeSpeed:  150 })

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
                        <div className="greetings">Thanks for tuning in.
                        </div>
                        <div id='first_name'> Franck Nsabimana, </div> 
                        <div className='greetings_title'>I am a passionate Software Developer </div>
                            <div className='greetings_tool'>I use <span className='language' id="languageAnimate"></span> </div> 
                    </div>
                    <div className="intro_text_bottom">
                        <div className='tool'>
                            My favorite programming paradigms are: <br />
                            Object-Oriented programming, Functional programming and Multithreaded programming.
                        </div>
                    </div>
                </div>
            </IntroContainer>
        </React.Fragment>
    )
}

export default Intro