import React, { useEffect, useRef } from 'react'
import { styled, Typography } from '@mui/material'
import './intro.css'
import { KeyboardArrowDown, FavoriteRounded } from '@mui/icons-material'
import { init } from 'ityped'
import me from '../../assets/images/selfie 2.jpg'


function Intro(props) {


    const MyStyledIntro = styled('div')(({ theme }) => {
        return {
            color: "black",
            backgroundColor: "lightblue",
            height: "calc(100vh - 90px)",
            display: "flex",
            justifyCcontent: "center",
            [theme.breakpoints.down('md')]: {
                display: "block",
                overflow: "hidden",
                justifyCcontent: "center"
            }
        };
    });


    const MyIntroProfileImage = styled('div')(({ theme }) => {
        return {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            marginTop: "4%",
            // marginLeft: "4%",
            [theme.breakpoints.down('md')]: {
                display: "block",
                alignContent: "center",
                alignItems: "center"

            },
        }
    })

    const MyIntroImage = styled('img')(({ theme }) => {
        return {
            display: "flex",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            objectFit: "cover",
            [theme.breakpoints.down('md')]: {
                display: "block",
                alignItems: "center",
                width: "300px",
                height: "300px",
                marginLeft: "8%"
            }
        }
    })

    const MyIntroText = styled('div')(({ theme }) => {
        return {
            flex: 1,
            color: "rgb(13, 13, 46)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginTop: "50px",
            [theme.breakpoints.down('md')]: {
                // flex: 0,
                textAlign: "center",
                width: "350px",
                // backgroundColor: "green",
                margin: "50px auto"
            }
        }
    })

    const MyKeyboardArrowARefLink = styled('a')(({ theme }) => {
        return {
            fontSize: "80px",
            color: "inherit",
            animation: "arrowBlink 1s infinite",
            margin: "10px auto"

        }
    })

    const MyKeyboardArrowDown = styled(KeyboardArrowDown)(({ theme }) => {
        return {
            fontSize: "80px",
            color: "inherit",
            animation: "arrowBlink 1s infinite",
        }
    })

    const scrollSkills = (event) => {
        console.log("scrolling to skills")
    }

    const handleScrollOnClick = (event) => {
        const destinationView = document.getElementById('skills')
        destinationView.scrollIntoView({behavior: "smooth"})
    }
    return (

        <React.Fragment>
            intro section
        </React.Fragment>
    )
}

export default Intro