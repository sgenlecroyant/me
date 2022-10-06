import { Box, styled } from '@mui/material'
import React, { useEffect, useRef } from 'react'
// import useOutsideAlerter from '../../hooks/UseOutsideAlerter';
import { List, Typography, ListItemIcon, ListItem, ListItemText, ListItemButton, IconButton } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Email, Handshake, AirlineSeatReclineNormal, School, ContactEmergency, } from '@mui/icons-material'
import './AppMenu.css'
import {connect} from 'react-redux'
import { toggleMenu } from '../../redux/action'


//{ handleMenuOptionClick: Function; showMenu: boolean }
function AppMenu(props) {

    
    const wrapperRef = useRef(null);
    const navigate = useNavigate()

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

    const handleScroll = (event) => {
        const destinationElement = document.getElementById("skii")
        props.handleMenuOptionClick()

        destinationElement?.scrollIntoView({ behavior: 'smooth' });
        console.log("scrolled to the destination: ", event.target)
    }


    const handleClick = (clicked) => {
        // alert("event: ", clicked)
        if(clicked === 'skills'){
            const destinationElement = document.getElementById("skills_section")
            props.handleMenuOptionClick()
            destinationElement?.scrollIntoView({ behavior: 'smooth' });
        }else if(clicked === 'focus'){
            // window.location.replace('http://localhost:3000/focus')
            props.toggle(false)
            navigate('/' +clicked)

        }else if(clicked === 'contact'){
            // window.location.replace('http://localhost:3000/contact')
            props.toggle(false)
            navigate('/' +clicked)
        }
    }

    return (
        <React.Fragment >
            {props.showMenu && <div  className='skills-box'>
                <div  className='logo_menu'>CodeDebug</div>
                <List> 
                    <ListItem  title="skills" className='list_item_home' >
                        <IconButton onClick={(e) => handleClick('skills')} className="item_button" >
                            <ListItemButton >
                            <School  className='item_icon' fontSize='small'/>
                            </ListItemButton>
                        </IconButton>
                        <ListItemText disableTypography primary="skills" className='item_text' />
                    </ListItem>
                    <ListItem title="focus" className='list_item_services'>
                        <IconButton onClick={(e) => handleClick('focus')}  className="item_button">
                            <ListItemButton>
                                <AirlineSeatReclineNormal className='item_icon' fontSize='small'/>
                            </ListItemButton>
                        </IconButton>
                        <ListItemText disableTypography primary="focus" className='item_text'></ListItemText>
                    </ListItem>
                    <ListItem onClick={() => handleClick('contact')} title="contact" className='list_item_features' >
                        <IconButton  className="item_button">
                            <ListItemButton>
                               <Email fontSize='small' className='item_icon'/>
                            </ListItemButton>
                        </IconButton>
                        <ListItemText disableTypography primary="contact" className='item_text'></ListItemText>
                    </ListItem>
                    {/* <ListItem title="connect" className='list_item_connect' >
                        <IconButton className="item_button">
                            <ListItemButton>
                                <Handshake fontSize='small' className='item_icon'/>
                            </ListItemButton>
                        </IconButton>
                        <ListItemText disableTypography primary="connect" className='item_text'></ListItemText>
                    </ListItem> */}
                </List>
            </div>}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        isMenuToggled: state.isMenuToggled
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (toggleValue) => dispatch(toggleMenu(toggleValue))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps) (AppMenu)