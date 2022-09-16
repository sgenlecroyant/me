import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import {  Menu, Close, Clear  } from '@mui/icons-material'
import './AppBar.css'
import AppMenu from '../menu/AppMenu'
function AppBar() {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [isDesktop, setIsDesktop] = useState(false)

    const NavBar = styled(Box)(({theme}) => {
        return {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            backgroundColor: "white",
            padding: "0px 20px",
            width: "100vw",
            margin: "10px",
            color: "crimson",
            [theme.breakpoints.down('sm')]: {
                // backgroundColor: "green",
                padding: "0px 5px"
            }
        }
    })

    const handleClick = (e: any) => {
        setShowMenu(!showMenu)
    }

    return (
        <React.Fragment>
            <NavBar className='navbar'>
                <div className="logo">CodeDebug</div>

                <div className="right_side">
                    <ul className="links">
                        <li><a href="#" id="skills">skills</a></li>
                        <li><a href="#" id="connect">Connect</a></li>
                        <li><a href="#" id="focus">focus</a></li>
                    </ul>
                </div>
                <div className='menu' onClick={handleClick}>
                    {showMenu? <Close/> : <Menu/>}
                </div>
            </NavBar>
            <AppMenu showMenu={showMenu} handleMenuOptionClick={handleClick}/>
        </React.Fragment>
    )
}

export default AppBar