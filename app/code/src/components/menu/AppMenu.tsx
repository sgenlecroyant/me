import { Box, styled } from '@mui/material'
import React, { useEffect, useRef } from 'react'
// import useOutsideAlerter from '../../hooks/UseOutsideAlerter';
import { List, Typography, ListItemIcon, ListItem, ListItemText, ListItemButton, IconButton } from '@mui/material'

import { Email, Handshake, AirlineSeatReclineNormal, School, ContactEmergency, } from '@mui/icons-material'
import './AppMenu.css'



function AppMenu(props: { handleMenuOptionClick: Function; showMenu: boolean }) {

    const wrapperRef = useRef(null);
    // useOutsideAlerter(wrapperRef);
    const MenuOptions = styled(Box)(({ theme }) => {
        return {
            width: "20px",
            height: "120px",
            top: "0px",
            left: "0px",
            backgroundColor: "maroon"
        }
    })

    const handleScroll = (event: any): void => {
        const destinationElement = document.getElementById(event.target.className)
        console.log("className: ", event.target.className)
        if (event.target.className === '3D-skills') {
            alert("Currently Not Available!")
            props.handleMenuOptionClick()
            console.error("Requested Feature Not Available")
            return;
        }

        // destinationElement?.classList.add("animated-social")

        props.handleMenuOptionClick()

        destinationElement?.scrollIntoView({ behavior: 'smooth' });
        console.log("scrolled to the destination: ", event.target.i)

    }

    return (
        <React.Fragment >
            {props.showMenu && <div className='skills-box' ref={wrapperRef}>
                <div  className='logo_menu'>CodeDebug</div>
                <List>
                    <ListItem className='list_item_home'>
                        <IconButton className="item_button">
                            <ListItemButton>
                            <School className='item_icon' fontSize='small'/>
                            </ListItemButton>
                        </IconButton>
                        <ListItemText disableTypography primary="skills" className='item_text' />
                    </ListItem>
                    <ListItem className='list_item_services'>
                        <IconButton className="item_button">
                            <ListItemButton>
                                <AirlineSeatReclineNormal className='item_icon' fontSize='small'/>
                            </ListItemButton>
                        </IconButton>
                        <ListItemText disableTypography primary="focus" className='item_text'></ListItemText>
                    </ListItem>
                    <ListItem className='list_item_features'>
                        <IconButton className="item_button">
                            <ListItemButton>
                                <Email fontSize='small' className='item_icon'/>
                            </ListItemButton>
                        </IconButton>
                        <ListItemText disableTypography primary="contact" className='item_text'></ListItemText>
                    </ListItem>
                    <ListItem className='list_item_connect'>
                        <IconButton className="item_button">
                            <ListItemButton>
                                <Handshake fontSize='small' className='item_icon'/>
                            </ListItemButton>
                        </IconButton>
                        <ListItemText disableTypography primary="connect" className='item_text'></ListItemText>
                    </ListItem>
                </List>
            </div>}
        </React.Fragment>
    )
}

export default AppMenu