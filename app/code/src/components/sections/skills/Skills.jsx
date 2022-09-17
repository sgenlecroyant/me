import { Box, Paper, styled, Tab, Typography } from '@mui/material'
import { height } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SkillsTab from './SkillsTab'
import './skills.css'
import { RenderUtil } from '../../util/RenderUtil'
import { Javascript, School } from '@mui/icons-material'
import spring from '../../../assets/images/spring 2.svg'
import mysql from '../../../assets/images/mysql.svg'
import maven from '../../../assets/images/maven.png'
import gradle from '../../../assets/images/gradle 1.png'
import gradle2 from '../../../assets/images/gradle 2.svg'
import postgresql from "../../../assets/images/postgresql.svg"
import kafka from '../../../assets/images/kafka.svg'
import kafkaStreams from "../../../assets/images/kafka streams.png"
import elasticsearch from '../../../assets/images/elasticsearch-logo.svg'
import elasticsearch2 from '../../../assets/images/elasticsearch.svg'
import reactjs from '../../../assets/images/reactjs blue.svg'
import reactjs2 from '../../../assets/images/reactjs green.svg'
import redux from '../../../assets/images/redux.svg'
import materialUI from '../../../assets/images/material ui.svg'
import hibernate from '../../../assets/images/hibernate-logo.svg'
import java from '../../../assets/images/java.svg'
import javascript from '../../../assets/images/javascript.svg'
import docker from '../../../assets/images/docker-fill.svg'
import jenkins from '../../../assets/images/jenkins.svg'
import git from '../../../assets/images/git.svg'
import github from '../../../assets/images/github.svg'
import typescript from '../../../assets/images/typescript.svg'
import jpa from '../../../assets/images/jpa 2.png'


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

                if (unselected.id === tabElement.id) {
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
            height: "190vh",
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
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Backend
                        </div>
                        <div className="backend_skills">
                            <div className="java">
                                <img className="tech_icon" src={java} alt="java" />
                                <div className="details">Java is one of the most popular, highly reliable due to its huge ecosystem which is full of libraries and stability on its own  programming languages</div>
                            </div>
                            <div className="spring">
                                <img className="tech_icon" src={spring} alt="spring framework" />
                                <div className="details">Spring is the top-one choice for building backend systems in Java, it's powerful and give thousands of methods and strategies to do stuffs, it's opinionated and highly configurable</div>
                            </div>
                            <div className="kafka">
                                <img className="tech_icon" src={kafka} alt="kafka" />
                                <div className="details">
                                    Being one of the top-choice for building data pipelines, it introduces lots of advantages that we need in microservices,
                                    from event-sourcing to distributed transactions
                                </div>
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Frontend
                        </div>
                        <div className="frontend_skills">
                            <div className="javascript">
                            <img className="tech_icon" src={javascript} alt="spring framework" />
                            <div className="details">javascript</div>
                            </div>

                            <div className="typescript">
                            <img className="tech_icon" src={typescript} alt="typescript" />
                            <div className="details">
                                typescript
                            </div>
                            </div>
                           <div className="reactjs">
                           <img className="tech_icon" src={reactjs} alt="reactjs" />

                           <div className="details">
                               reactjs 
                           </div>
                           </div>
                            
                            <div className="material_ui">
                            <img className="tech_icon" src={materialUI} alt="material ui" />

                            <div className="details">
                                material ui
                            </div>
                            </div>

                            <div className="redux">
                            <img className="tech_icon" src={redux} alt="redux" />

                            <div className="details">
                                redux
                            </div>
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Big Data Processing
                        </div>
                        <div className="big_data_skills">
                            <img className="tech_icon" src={java} alt="java" />
                            <img className="tech_icon" src={kafkaStreams} alt="kafka streams" />
                        </div>
                    </Paper>
                </div>



                <div className="skills_second_row">
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Databases
                        </div>
                        <div className="backend_skills">
                            <img className="tech_icon" src={mysql} alt="mysql" />
                            <img className="tech_icon" src={postgresql} alt="postgres" />
                            <img className="tech_icon" src={elasticsearch2} alt="elasticsearch" />
                            <img className="tech_icon" src={hibernate} alt="hibernate" />
                            <img className="tech_icon" src={jpa} alt="jpa" />
                        </div>
                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            CI/CD
                        </div>
                        <div className="ci_cd_skills">
                            <img className="tech_icon" src={jenkins} alt="mysql" />
                        </div>
                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            VCS/SCM
                        </div>
                        <div className="vcs_skills">
                            <img className="tech_icon" src={git} alt="mysql" />
                            <img className="tech_icon" src={github} alt="mysql" />
                        </div>
                    </Paper>
                </div>

                <div className="skills_third_row">
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Build Tools
                        </div>
                        <div className="build_tools_skills">
                            <img className="tech_icon" src={maven} alt="maven" />
                            <img className="tech_icon" src={gradle2} alt="gradle" />
                        </div>
                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Containerization
                        </div>
                        <div className="containerization_skills">
                            <img className="tech_icon" src={docker} alt="docker" />
                        </div>
                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            other story, ...
                        </div>

                    </Paper>
                </div>

            </SkillsContainer>
        </React.Fragment>
    )
}


export default Skills