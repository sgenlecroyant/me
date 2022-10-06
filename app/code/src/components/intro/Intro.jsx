import React, { useEffect, useRef } from 'react'
import { styled, Typography } from '@mui/material'
import './intro.css'
import { KeyboardArrowDown, FavoriteRounded, HearingOutlined, LogoDev, HeartBrokenSharp, Favorite } from '@mui/icons-material'
import { init } from 'ityped'
import me from '../../assets/images/selfie 2.jpg'
import { Box } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import { toggleMenu } from '../../redux/action'
import { connect } from 'react-redux'

function Intro(props) {

    const IntroContainer = styled(Box)(({ theme }) => {
        return {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "",
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
        init(languageAnimate, {
            showCursor: false, strings: ['Java', 'JavaScript', 'TypeScript'], backDelay: 1500,
            backSpeed: 150, typeSpeed: 150
        })

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

                        <br/>
                        <div className='my_paradigms'>
                            <div style={{textAlign: "center"}}>I do:</div>
                            <marquee behavior="" direction="">
                            OOP programming, Functional programming, Multithreaded programming
                            </marquee>
                        </div>
                    </div>
                    <div className="intro_text_bottom">
                        <div className="paradigms">
                            My favorite programming paradigms are: <br />
                            <div>Object-Oriented programming, Functional programming and Multithreaded programming</div>
                        </div>
                        {/* <div className='marquee'>
                            <br />
                            <div className="marquee_inner">
                                <div>My</div> <div>{<Favorite fontSize='small' />}</div> <div>programming paradigms:</div></div>
                            <marquee behavior="scroll" scrolldelay="120" direction="left">
                                Object-Oriented programming, Functional programming, Multithreaded programming
                            </marquee>
                        </div> */}
                    </div>
                </div>
            </IntroContainer>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        isMenuToggled: state.isMenuToggled
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (toggleValue) => dispatch(toggleMenu(toggleValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro)