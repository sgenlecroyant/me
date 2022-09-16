import { Box, Paper, styled, Tab, Typography } from '@mui/material'
import { height } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SkillsTab from './SkillsTab'
import './skills.css'
import { RenderUtil } from '../../util/RenderUtil'
import { School } from '@mui/icons-material'

function Skills(props) {
    const [selectedTabElementDetails, setSelectedTabElementDetails] = useState({ id: 0, title: "", isSelected: false, className: "" })
    const [skillsTabArray, setSkillsTabArray] = useState([
        {
            id: 1,
            title: "Backend",
            isSelected: false,
            className: "backend"
        },
        {
            id: 2,
            title: "Frontend",
            isSelected: false,
            className: "frontend"
        },
        {
            id: 3,
            title: "Big Data Processing",
            isSelected: false,
            className: "BigData"
        },
        {
            id: 4,
            title: "ORM Tools",
            isSelected: false,
            className: "ORM"
        },
        {
            id: 5,
            title: "Containeriza/Orchestration",
            isSelected: false,
            className: "ContainerOrchest"
        },
        {
            id: 6,
            title: "CI/CD",
            isSelected: false,
            className: "CICD"
        },
        {
            id: 7,
            title: "VCS",
            isSelected: false,
            className: "VersionControl"
        }
    ])

    useEffect(() => {
        const selectedAtInitialState = skillsTabArray.map((skill) => {
            if (skill.title === 'Backend') {
                setSelectedTabElementDetails(skill)
                return { ...skill, isSelected: true }
            } else {
                return { ...skill }
            }
        })
        setSkillsTabArray(selectedAtInitialState)
    }, [])



    const handleSkillsTabClick = (event, tabElement) => {

        if (!tabElement.isSelected) {
            var unselectedTabs = skillsTabArray.map((tabElt) => tabElt.isSelected ? { ...tabElt, isSelected: false } : { ...tabElt });

            var selectClickedOnly = unselectedTabs.map((unselected) => {

                if (unselected.id == tabElement.id) {
                    var selectedOnClick = { ...unselected, isSelected: true }
                    setSelectedTabElementDetails(selectedOnClick)
                    return selectedOnClick
                } else {
                    return { ...unselected }
                }

            })
            setSkillsTabArray(selectClickedOnly)
        }
        console.log("selecting", tabElement)
    }

    const SkillsContainer = styled(Box)(({ theme }) => {
        return {
            width: "100vw",
            height: "120vh",
            backgroundColor: "",
            paddingTop: "8rem",
            [theme.breakpoints.down('sm')]: {
                paddingTop: "0px",
                backgroundColor: "green",
                marginTop: "-1rem"
            },
            [theme.breakpoints.down('sm')]: {
                paddingTop: "0rem",
                backgroundColor: "yellow",
                marginTop: "1rem"
            },

            // [theme.breakpoints.up('lg')]: {
            //     paddingTop: "0px",
            //     backgroundColor: "blue",
            //     marginTop: "0rem"
            // }
        }
    })

    return (
        <React.Fragment>
            <SkillsContainer className='skills_container'>
                <div className="skills_skills_section">
                    <div className="title_and_icon">
                        <div>
                            <School id="skills_icon" />
                        </div>
                        <div className="skills_title">Skills I have got so far</div>
                    </div>
                </div>
                <div className="skills_first_row">
                    <Paper className="skills_type">
                        Backend
                    </Paper>
                    <Paper className="skills_type">
                        Frontend
                    </Paper>
                    <Paper className="skills_type">
                        Big Data Processing
                    </Paper>
                </div>
            </SkillsContainer>
        </React.Fragment>
    )
}


export default Skills