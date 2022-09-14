import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import './skills3D.css'

function Skills3D() {

    const MySkills3DWrapper = styled(Box)(({ theme }) => {
        return {
            height: "100vh",
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center"
        }
    })

    const MySkills3DTitle = styled(Typography)(({ theme }) => {
        return {
            textAlign: "center",
            // border: "5px solid",
            // backgroundColor: "rgb(13, 13, 46)",
            color: "black",
            fontSize: "20px",
            fontWeight: "900",
            textDecorationLine: "underline",
            paddingBottom: "20px"

        }
    })

    const MyInnerSkillsWrapper = styled(Box)(({ theme }) => {
        return {
            // display: 'flex',
            // justifyContent: "space-around",
            // alignItems: "center",
            // alignContent: "center"

        }
    })

    const MyBackendSkills = styled('div')(({ theme }) => {
        return {

        }
    })
    const MyFrontendSKills = styled('div')(({ theme }) => {
        return {

        }
    })

    const MyBigDataSkills = styled('div')(({ theme }) => {
        return {

        }
    })

    const MyContainerizationSkills = styled('div')(({ theme }) => {
        return {

        }
    })

    const MyCICDskills = styled('div')(({ theme }) => {
        return {

        }
    })

    const MYVCSskills = styled('div')(({ theme }) => {
        return {

        }
    })

    const MySkill = styled('div')(({ theme }) => {
        return {

        }
    })

    return (
        <React.Fragment>
            <MySkills3DWrapper>
                {/* <MySkills3DTitle>
                    Skills in motion
                </MySkills3DTitle> */}

                {/* <div class="stage-cube-container-1">
                    <div class="cubespinner">

                        <div class="face1">
                            <img src="./assets/images/java.svg" alt="" />
                        </div>

                        <div class="face2">
                            <img src="./assets/images/spring.svg" alt="" />
                        </div>

                        <div class="face3">
                            <img src="./assets/images/mysql.svg" alt="" />
                        </div>

                        <div class="face4">
                            <img src="./assets/images/postgresql.svg" alt="" />
                        </div>

                        <div class="face5">
                            <img src="./assets/images/gradle 2.svg" alt="" />
                        </div>

                        <div class="face6">
                            <img src="./assets/images/maven.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="stage-cube-container-2">
                    <div class="cubespinner">

                        <div class="face1">
                            <img src="./assets/images/java.svg" alt="" />
                        </div>

                        <div class="face2">
                            <img src="./assets/images/spring.svg" alt="" />
                        </div>

                        <div class="face3">
                            <img src="./assets/images/mysql.svg" alt="" />
                        </div>

                        <div class="face4">
                            <img src="./assets/images/postgresql.svg" alt="" />
                        </div>

                        <div class="face5">
                            <img src="./assets/images/gradle 2.svg" alt="" />
                        </div>

                        <div class="face6">
                            <img src="./assets/images/maven.png" alt="" />
                        </div>
                    </div>
                </div> */}
            </MySkills3DWrapper>
        </React.Fragment>
    )
}

export default Skills3D