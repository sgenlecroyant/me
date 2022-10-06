import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import { Menu, Close, Clear, PropaneSharp } from '@mui/icons-material'
import './AppBar.css'
import AppMenu from '../menu/AppMenu'
import AboutMe from '../contact/AboutMe'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'
import { toggleMenu } from '../../redux/action'
function AppBar(props) {

    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
    }, [])


    const NavBar = styled(Box)(({ theme }) => {
        return {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            padding: "0px 20px",
            width: "100vw",
            margin: "10px",
            color: "white",
            backgroundColor: "crimson",
            [theme.breakpoints.down('sm')]: {
                // backgroundColor: "green",
                padding: "0px 5px"
            }
        }
    })

    const handleClick = (e: any) => {
        props.toggle(!props.isMenuToggled)
    }

    const navStyleOnShowMenu = {
        backgroundColor: "crimson",
        color: "white"
    }

    const navStyleOnHideMenu = {
        backgroundColor: "white",
        color: "crimson"
    }

    const handleNavLinkClick = (e: React.SyntheticEvent, link: string) => {
        navigate(link)
    }


    return (
        <React.Fragment>
            <div id="top" className='relative_to_contact_chat'>
            <NavBar className='navbar' id="mynav" >
                <div className="logo">CodeDebug</div>

                <div className="right_side">
                    <ul className="links" id="links_list">
                        <li><a href="#skills_section" id="skills">skills</a></li>
                        <li><li onClick={(e) => handleNavLinkClick(e, "/contact")} id="connect">Connect</li></li>
                        <li><li onClick={(e) => handleNavLinkClick(e, "/focus")} id="focus">focus</li></li>
                    </ul>
                </div>
                <div className='menu' id='menu_icon' onClick={handleClick}>
                    {props.isMenuToggled ? <Close /> : <Menu />}
                </div>
            </NavBar>
            <AppMenu showMenu={props.isMenuToggled} handleMenuOptionClick={handleClick} />
            {/* <AboutMe/> */}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state: any) => {
    return {
        isMenuToggled: state.isMenuToggled
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (toggleValue) => dispatch(toggleMenu(toggleValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AppBar)