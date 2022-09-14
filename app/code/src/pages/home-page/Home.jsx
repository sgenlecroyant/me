import { styled } from '@mui/material'
import React from 'react'
import './Home.css'

function Home(props) {
    const MyDiv = styled('div')(({theme}) => {
        return {
            color: "black",
            backgroundColor: props.bgcolor,
            height: "100vh",
            width: "auto"
        };
    });
  return (
    <MyDiv>
       <div id={props.id}>{props.data}</div>
    </MyDiv>
  )
}

export default Home