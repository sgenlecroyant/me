import { ChatBubble, FavoriteRounded, Home, Info, Person } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
    Link,
    useLocation, useNavigate
} from "react-router-dom";
import ContactPopUp from './ContactPopUp';
function MyBottomNavigationAction(props) {

    const [activeBottomNavigation, setActiveBottomNavigation] = useState(0)

    var navigator = useNavigate()

    useEffect(() => {
    }, [])

    const navigate = useNavigate()
    
    const handleNavigation = (e, path) => {
        var topElement = document.getElementById('top');
        // console.log(history)
        if(path == "/home"){
            if (topElement !== null) {
                topElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
            }
        }
        else {
            console.log(path)
            navigate(path)
        }
    }
    return (
        <div className='bottom_navigation'>
            <BottomNavigation sx={{ width: "100%", position: "fixed", bottom: "0px" }} value={activeBottomNavigation}

            onChange={(event, newActiveBottomNavigation) => setActiveBottomNavigation(newActiveBottomNavigation)}
            >
                <BottomNavigationAction
                    onClick={(e) => handleNavigation(e, "/home")} 

                    label="Home" className='bottom_navigation_action' icon={<Home />} />
                <BottomNavigationAction 
                
                label="About" className='bottom_navigation_action' icon={<Info />} />
                <BottomNavigationAction 
                onClick={(e) => handleNavigation(e, "/contact")} 
                label="Get in touch" className='bottom_navigation_action' icon={<ChatBubble />} />
            </BottomNavigation>
        </div>
    )
}

export default MyBottomNavigationAction