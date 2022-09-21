import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import { Menu, Close, Clear } from '@mui/icons-material'
import './AppBar.css'
import AppMenu from '../menu/AppMenu'
import AboutMe from '../contact/AboutMe'
function AppBar() {

    const [showMenu, setShowMenu] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        var myNav = document.getElementById('mynav');
        var skillsLink = document.getElementById('skills')
        var connectLink = document.getElementById('connect')
        var focusLink = document.getElementById('focus')

        var menuIcon = document.getElementById('menu_icon')



        var linksList = document.getElementById('links-list')

        // const linksStyleWhite = {
        //     display: "flex",
        //     justifycontent: "space - around",
        //     alignitems: "center",
        //     aligncontent: "center",
        //     liststyletype: "none",
        //     padding: "0px 25px",
        //     color: "white"

        // }

        // const linksStyleCrimson = {
        //     display: "flex",
        //     justifycontent: "space - around",
        //     alignitems: "center",
        //     aligncontent: "center",
        //     liststyletype: "none",
        //     padding: "0px 25px",
        //     color: "crimson"

        // }
        

        // console.log(linksList)
        

        // var skillsStyleValueWhite = {
        //     margin: " 0px 10px", texttransform: "uppercase",
        //     fontsize: "var(--defaultFontSize)", color: "crimson", padding: "0px 20px",
        //     fontweight: 400
        // }
        // var connectStyleValueWhite= {
        //     margin: " 0px 10px", texttransform: "uppercase",
        //     fontsize: "var(--defaultFontSize)", color: "crimson", padding: "0px 20px",
        //     fontweight: 400
        // }
        // var focusStyleValueWhite = {
        //     margin: " 0px 10px", texttransform: "uppercase",
        //     fontsize: "var(--defaultFontSize)", color: "crimson", padding: "0px 20px",
        //     fontweight: 400
        // }

        // // =================================================================
        // var skillsStyleValueCrimson = {
        //     margin: " 0px 10px", texttransform: "uppercase",
        //     fontsize: "var(--defaultFontSize)", color: "white", padding: "0px 20px",
        //     fontweight: 400
        // }
        // var connectStyleValueCrimson= {
        //     margin: " 0px 10px", texttransform: "uppercase",
        //     fontsize: "var(--defaultFontSize)", color: "white", padding: "0px 20px",
        //     fontweight: 400
        // }
        // var focusStyleValueCrimson = {
        //     margin: " 0px 10px", texttransform: "uppercase",
        //     fontsize: "var(--defaultFontSize)", color: "white", padding: "0px 20px",
        //     fontweight: 400
        // }

        // window.onscroll = function () {
        //     "use strict";
        //     if ((document.body.scrollTop >= 5 || document.documentElement.scrollTop >= 5)) {
        //         console.log("changing color")
        //         // Object.assign(skillsLink.style, skillsStyleValueWhite);
        //         // Object.assign(connectLink.style, connectStyleValueWhite);
        //         // Object.assign(focusLink.style, focusStyleValueWhite);

        //         // Object.assign(linksList.style, linksStyleWhite)
        //         myNav.classList.add("nav-colored");
        //         myNav.classList.remove("nav-transparent");
        //         skillsLink.classList.add('skills_colored')
        //         connectLink.classList.add('connect_colored')
        //         focusLink.classList.add('focus_colored')
        //         menuIcon.classList.add('menu_colored')

        //         skillsLink.classList.remove('skills_colored_transparent')
        //         connectLink.classList.remove('connect_colored_transparent')
        //         focusLink.classList.remove('focus_colored_transparent')
        //         menuIcon.classList.remove('menu_transparent')
        //     }
        //     else {
                
        //         // Object.assign(skillsLink.style, skillsStyleValueCrimson);
        //         // Object.assign(connectLink.style, connectStyleValueCrimson);
        //         // Object.assign(focusLink.style, focusStyleValueCrimson);
        //         // Object.assign(linksList.style, linksStyleCrimson)

        //         myNav.classList.add("nav-transparent");
        //         myNav.classList.remove("nav-colored");

        //         skillsLink.classList.remove('skills_colored')
        //         connectLink.classList.remove('connect_colored')
        //         focusLink.classList.remove('focus_colored')
        //         menuIcon.classList.remove('menu_colored')

        //         skillsLink.classList.add('skills_colored_transparent')
        //         connectLink.classList.add('connect_colored_transparent')
        //         focusLink.classList.add('focus_colored_transparent')
        //         menuIcon.classList.add('menu_transparent')
        //     }
        // };
       
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
        setShowMenu(!showMenu)
    }

    const navStyleOnShowMenu = {
        backgroundColor: "crimson",
        color: "white"
    }

    const navStyleOnHideMenu = {
        backgroundColor: "white",
        color: "crimson"
    }


    return (
        <React.Fragment>
            <div id="top" className='relative_to_contact_chat'>
            <NavBar className='navbar' id="mynav" >
                <div className="logo">CodeDebug</div>

                <div className="right_side">
                    <ul className="links" id="links_list">
                        <li><a href="#" id="skills">skills</a></li>
                        <li><a href="#" id="connect">Connect</a></li>
                        <li><a href="#" id="focus">focus</a></li>
                    </ul>
                </div>
                <div className='menu' id='menu_icon' onClick={handleClick}>
                    {showMenu ? <Close /> : <Menu />}
                </div>
            </NavBar>
            <AppMenu showMenu={showMenu} handleMenuOptionClick={handleClick} />
            {/* <AboutMe/> */}
            </div>
        </React.Fragment>
    )
}

export default AppBar