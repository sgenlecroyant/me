import React, { SyntheticEvent, useEffect, useState } from 'react'
import { AppBar as MuiAppBar, Box, Button, IconButton, styled, Toolbar, Typography } from '@mui/material'
import { Cancel, CancelOutlined, CancelPresentation, KeyboardArrowDown, Mail, Menu, Person } from '@mui/icons-material'
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
            backgroundColor: "crimson",
            padding: "0px 20px",
            width: "100vw",
            margin: "10px"
        }
    })

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
                <div className='menu'>
                    <Menu/>
                </div>
            </NavBar>
        </React.Fragment>
    )
}

export default AppBar