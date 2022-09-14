import { Box, styled, Tab, Typography } from '@mui/material'
import { height } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SkillsTab from './SkillsTab'
import './skills.css'
import { RenderUtil } from '../../util/RenderUtil'

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
    const MySkillsWrapper = styled(Box)(({ theme }) => {
        return {
            backgroundColor: "lightblue",
            height: "100vh",
            paddingTop: "60px",
            [theme.breakpoints.down('sm')]: {
                height: "160vh"
            }
        }
    })

    const MySkillsBox = styled(Box)(({ theme }) => {
        return {
            marginTop: "2%",
            display: "flex",
            justifyContent: "space-around",
            [theme.breakpoints.down('sm')]: {
                display: "block"
            }
        }
    })
    const SkillsTitleStyle = {
        paddingTop: '6%',
        textAlign: 'center',
        fontSize: "30px",
        fontWeight: "900"
    }

    const MyStyledSkillsTab = styled('div')(({ theme }) => {
        return {
            textAlign: 'center',
            fontSize: "15px",
            fontWeight: "900",
            backgroundColor: "black",
            color: "white",
            border: "1px solid",
            height: "30px",
            borderRadius: "80px",
            width: "16%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            [theme.breakpoints.down('sm')]: {
                width: "100%"
            }
        }
    })

    const SelectedTabDetails = styled(Box)(({ theme }) => {
        return {
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            // alignItems: "center",
            // alignContent: "center"
        }
    })

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

    return (
        <MySkillsWrapper id="skills">
            <Typography style={SkillsTitleStyle}>Skills</Typography>
            <MySkillsBox>
                {skillsTabArray.map((tabElement) => {
                    return <MyStyledSkillsTab style={{ opacity: tabElement.isSelected ? 1 : 0.4 }} key={tabElement.id} className={tabElement.className} title={tabElement.title} onClick={(event) => handleSkillsTabClick(event, tabElement)}>{tabElement.title}</MyStyledSkillsTab>
                })}
            </MySkillsBox>
            <SelectedTabDetails>
                {RenderUtil.renderTabDetails(selectedTabElementDetails.title)}
            </SelectedTabDetails>
        </MySkillsWrapper>
    )
}


export default Skills