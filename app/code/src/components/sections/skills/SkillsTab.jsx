import { Box, Button, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import './skillsTab.css'
function SkillsTab(props) {

    const [activeSkillsTab, setActiveSkillsTab] = useState("Backend")
    const [isSelected, setSelected] = useState(false)

    const MyStyledSkillsTab = styled('div')(({ theme }) => {
        return {
            textAlign: 'center',
            fontSize: "15px",
            fontWeight: "900",
            backgroundColor: "black",
            color: "white",
            border: "1px solid",
            height:"30px",
            borderRadius: "80px",
            width: "15%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            opacity: isSelected? 1: 0.3
        }
    })

    const SkillsTypeStyle = {
        textAlign: 'center',
        fontSize: "15px",
        fontWeight: "900"
    }

    const handleSkillsTabClick = (event) => {
       
        // const selectedTab = event.target.title;
        // setActiveSkillsTab(selectedTab)
        // console.log(event.target.title)
       

        // if(selectedTab === 'Big Data Processing'){
        //     setActiveSkillsTab('Big-Data-Processing')
        // }
        // console.log("selected: ", selectedTab)
        // console.log("active: ", activeSkillsTab)
        setSelected(true)
    }
    return (
        <React.Fragment>
            <MyStyledSkillsTab className={activeSkillsTab === props.title? activeSkillsTab+ "-active": activeSkillsTab} title={props.type} onClick={handleSkillsTabClick}>
               {props.type}
            </MyStyledSkillsTab>
        </React.Fragment>
    )
}

export default SkillsTab