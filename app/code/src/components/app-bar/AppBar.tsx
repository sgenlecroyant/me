import React, { SyntheticEvent, useEffect, useState } from 'react'
import { AppBar as MuiAppBar, Box, IconButton, styled, Toolbar, Typography } from '@mui/material'
import { Cancel, CancelOutlined, CancelPresentation, KeyboardArrowDown, Mail, Menu, Person } from '@mui/icons-material'
import './AppBar.css'
import AppMenu from '../menu/AppMenu'
function AppBar() {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [isDesktop, setIsDesktop] = useState(false)

   
    
    const appBarHeight = "90px"
    const MyApplicationAppBar = styled(MuiAppBar)(({ theme }) => {
        
        return {
            height: appBarHeight
        }
    })

    const StyledToolbar = styled(Toolbar)(({ theme }) => {
        return {
            backgroundColor: "rgb(13, 13, 46)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: appBarHeight
        }
    })

    const HeaderRightSide = styled(Box)(({ theme }) => {
        return {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    })

    const HeaderLeftSide = styled(Box)(({ theme }) => {
        return {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    })

    const RightSideIcons = styled(Box)(({ theme }) => {
        return {
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "0px",
            alignItems: "center",
            marginTop: "10px"
        }
    })

    const MyKeyboardArrowDown = styled(KeyboardArrowDown)(({ theme }) => {
        return {
            fontSize: "80px",
            color: "inherit",
            animation: "arrowBlink 1s infinite",
        }
    })

    const handleEmail = (event: React.SyntheticEvent) => {
        alert("emailing");
    }

    const handleShowMenu = (event: React.SyntheticEvent) => {
        setShowMenu(!showMenu)

    }


    const handleScrollOnClick = (event: any) => {
        const destinationView = document.getElementById('skills')
        destinationView?.scrollIntoView({behavior: "smooth"})
    }
    return (
        <React.Fragment>
            <MyApplicationAppBar elevation={0} position='sticky'>
                <StyledToolbar>
                    <HeaderLeftSide>
                        <Typography fontStyle={'normal  '} fontSize={'30px'} fontWeight={700}>{`{CodeDebug:)}`}</Typography>
                        <RightSideIcons>
                            <div className='rightside-icon'>
                                {/* <Person /> */}
                            </div>
                            <div className='rightside-icon'>
                                {/* <Mail /> */}
                            </div>
                        </RightSideIcons>
                    </HeaderLeftSide>
                    <Box>
                        <div className='arrow-icon-wrapper'>
                            <a className='arrow-skills' style={{ color: "maroon" }} onClick={handleScrollOnClick}>
                                <MyKeyboardArrowDown />
                            </a>
                        </div>
                    </Box>
                    <HeaderRightSide>
                        <IconButton onClick={handleShowMenu}>
                            {!showMenu ? <Menu color='success' /> : <CancelPresentation color='success' />}
                        </IconButton>
                    </HeaderRightSide>
                </StyledToolbar>
            </MyApplicationAppBar>
            <AppMenu handleMenuOptionClick={handleShowMenu} showMenu={showMenu} />
        </React.Fragment>
    )
}

export default AppBar