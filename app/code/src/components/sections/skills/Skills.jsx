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
import Social from '../../social/Social'
import Contact from '../../contact/Contact'
import Hello from '../../../Hello'


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
            position: "relative",
            width: "100vw",
            height: "100vh",
            backgroundColor: "",
            marginTop: "8rem",
            [theme.breakpoints.down('sm')]: {
                paddingTop: "0px",
                backgroundColor: "green",
                marginTop: "-1rem"
            },
            [theme.breakpoints.down('sm')]: {
                paddingTop: "0rem",
                // backgroundColor: "yellow",
                marginTop: "0rem"
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
            <SkillsContainer id='skills_section' className='skills_container'>
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
                                <div className="skill_details_box">
                                    <div className="details">Java </div>
                                    <div className='details_explain' > One of popular general purpose programming languages</div>
                                </div>
                            </div>
                            <div className="spring">
                                <img className="tech_icon" src={spring} alt="spring framework" />
                                <div className="skill_details_box">
                                    <div className="details">Spring</div>
                                    <div className="details_explain">Building backend systems in Java.</div>
                                </div>
                            </div>
                            <div className="kafka">
                                <img className="tech_icon" src={kafka} alt="kafka" />
                                <div className="skill_details_box">
                                    <div className="details">Kafka</div>
                                    <div className="details_explain">
                                        Building data pipelines and event-driven systems
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                    <Paper id="frontend" elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Frontend
                        </div>
                        <div className="frontend_skills">
                            <div className="javascript">
                                <img className="tech_icon" src={javascript} alt="spring framework" />
                                <div className='skill_details_box'>
                                    <div className='details'>JavaScript</div>
                                    <div className="details_explain">The language of the web.</div>
                                </div>
                            </div>

                            <div className="typescript">
                                <img className="tech_icon" src={typescript} alt="typescript" />
                                <div className='skill_details_box'>
                                    <div className='details'> Typescript</div>
                                    <div className="details_explain">
                                        Superset of Javascript
                                    </div>
                                </div>
                            </div>
                            <div className="reactjs">
                                <img className="tech_icon" src={reactjs} alt="reactjs" />

                                <div className='skill_details_box'>
                                    <div className="details">ReactJS</div>
                                    <div className="details_explain">
                                        Building web user interfaces.
                                    </div>
                                </div>
                            </div>

                            <div className="material_ui">
                                <img className="tech_icon" src={materialUI} alt="material ui" />

                                <div className="skill_details_box">
                                    <div className="details">
                                        Material UI
                                    </div>
                                    <div className="details_explain">
                                        Design UIs quickly.
                                    </div>
                                </div>
                            </div>

                            <div className="redux">
                                <img className="tech_icon" src={redux} alt="redux" />

                                <div className="skill_details_box">
                                    <div className="details">
                                        Redux
                                    </div>
                                    <div className="details_explain">
                                        Application State Management tool.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Big Data Processing
                        </div>
                        <div className="big_data_skills">
                            <div className="java">
                                <img className="tech_icon" src={java} alt="java" />

                                <div className="skill_details_box">

                                    <div className="details">
                                        Java
                                    </div>
                                    <div className="details_explain">
                                        Proven highly scalabale and reliable in big data technology
                                    </div>

                                </div>

                            </div>

                            <div className="kafka_streams">
                                <img className="tech_icon" src={kafkaStreams} alt="kafka streams" />

                                <div className="skill_details_box">

                                    <div className="details">
                                        Kafka Streams
                                    </div>
                                    <div className="details_explain">
                                        <div>
                                            Big data Processing technology for real-time data streams.
                                            <span className='additional_details'>
                                                It's relatively new to the field, got matured back in 2017. It's one of the top contenders alongside Apache Spark Streaming, NiFi, Hadoop and Apache Flink.
                                            </span>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </Paper>
                </div>



                <div className="skills_first_row">
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Databases
                        </div>
                        <div className="database_skills">

                            <div className="mysql">
                                <img className="tech_icon" src={mysql} alt="mysql" />
                                <div className="skill_details_box">
                                    <div className="details">MySQL </div>
                                    <div className='details_explain' > Relational data store technology.</div>
                                </div>
                            </div>

                            <div className="postgres">
                                <img className="tech_icon" src={postgresql} alt="postgres" />
                                <div className="skill_details_box">
                                    <div className="details">PostgreSQL </div>
                                    <div className='details_explain' > Relational data store technology.</div>
                                </div>
                            </div>

                            <div className="elasticsearch">
                                <img className="tech_icon" src={elasticsearch2} alt="elasticsearch" />
                                <div className="skill_details_box">
                                    <div className="details">Elasticsearch </div>
                                    <div className='details_explain' >NoSQL data store for full text search and analytics engine.</div>
                                </div>
                            </div>


                            <div className="jpa">
                                <img className="tech_icon" src={jpa} alt="jpa" />
                                <div className="skill_details_box">
                                    <div className="details">JPA </div>
                                    <div className='details_explain' > Java Persistence API.</div>
                                </div>
                            </div>

                            <div className="hibernate">
                                <img className="tech_icon" src={hibernate} alt="hibernate" />
                                <div className="skill_details_box">
                                    <div className="details">Hibernate </div>
                                    <div className='details_explain' > JPA's the most popular implementation.</div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            workflow automation
                        </div>
                        <div className="ci_cd_skills">

                            <div className="jenkins">
                                <img className="tech_icon" src={jenkins} alt="jenkins" />
                                <div className="skill_details_box">
                                    <div className="details">Jenkins </div>
                                    <div className='details_explain' >
                                        <div>
                                            Automation Server
                                            for continious Integration, Continious Deployment.
                                            <span className='additional_details'>
                                                It fits well in the testing and deployment software development lifecycle and provides a well-standarized environemnt while developing, testigng and deploying the software.
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            VCS/SCM
                        </div>
                        <div className="vcs_skills">

                            <div className="git">
                                <img className="tech_icon" src={git} alt="git" />
                                <div className="skill_details_box">
                                    <div className="details">Git </div>
                                    <div className='details_explain' > For software source code version control</div>
                                </div>
                            </div>

                            <div className="github">
                                <img className="tech_icon" src={github} alt="github" />
                                <div className="skill_details_box">
                                    <div className="details">GitHub </div>
                                    <div className='details_explain' > For software source code hosting service.</div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>

                <div className="skills_first_row">
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Build Tools
                        </div>

                        <div className="maven">
                            <img className="tech_icon" src={maven} alt="maven" />
                            <div className="skill_details_box">
                                <div className="details">Maven </div>
                                <div className='details_explain' > Project build & dependence management tool</div>
                            </div>
                        </div>

                        <div className="gradle">
                            <img className="tech_icon" src={gradle} alt="gradle" />
                            <div className="skill_details_box">
                                <div className="details">Gradle </div>
                                <div className='details_explain' > Project build & dependence management tool</div>
                            </div>
                        </div>

                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            Containerization
                        </div>

                        <div className="docker">
                            <img className="tech_icon" src={docker} alt="docker" />
                            <div className="skill_details_box">
                                <div className="details">Docker </div>
                                <div className='details_explain' > Containerization</div>
                            </div>
                        </div>

                    </Paper>
                    <Paper elevation={3} className="skills_type">
                        <div className="skill_type_title">
                            A little bit about me!
                        </div>
                        <div className='about_me'>
                            I am passionate about computer programming,
                            I learn very quickly and I love talking about tech.
                            In fact, I love sharing what I know with others and ask if there is anything that I don't know.
                            <br/>
                            ~ I love talking about Design Patterns, 
                            <br/>
                            ~ I love logging, yeah application logs
                        </div>


                    </Paper>
                </div>

                <Social />
            </SkillsContainer>
        </React.Fragment>
    )
}


export default Skills