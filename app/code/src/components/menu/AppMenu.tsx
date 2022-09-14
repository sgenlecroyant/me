import { Box, styled } from '@mui/material'
import React, { useEffect, useRef } from 'react'
// import useOutsideAlerter from '../../hooks/UseOutsideAlerter';
import './AppMenu.css'



function AppMenu(props: { handleMenuOptionClick: Function; showMenu: boolean }) {

    const wrapperRef = useRef(null);
    // useOutsideAlerter(wrapperRef);
    const MenuOptions = styled(Box)(({ theme }) => {
        return {
            width: "20px",
            height: "120px",
            top: "0px",
            right: "0px",
            backgroundColor: "maroon"
        }
    })

    // function useOutsideAlerter(ref: any) {
    //     useEffect(() => {
    //       /**
    //        * Alert if clicked on outside of element
    //        */
    //       function handleClickOutside(event: any) {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //             alert("Yu clicked outside")
    //             props.handleMenuOptionClick()
    //             alert("closed")
    //         }
    //       }
    //       // Bind the event listener
    //       document.addEventListener("mousedown", handleClickOutside);
    //       return () => {
    //         // Unbind the event listener on clean up
    //         document.removeEventListener("mousedown", handleClickOutside);
    //       };
    //     }, [ref]);
    //   }
    

    const handleScroll = (event: any): void => {
        const destinationElement = document.getElementById(event.target.className)
        console.log("className: ", event.target.className)
        if(event.target.className === '3D-skills'){
            alert("Currently Not Available!")
            props.handleMenuOptionClick()
            console.error("Requested Feature Not Available")
            return;
        }

        // destinationElement?.classList.add("animated-social")

        props.handleMenuOptionClick()

        destinationElement?.scrollIntoView({behavior: 'smooth'});
        console.log("scrolled to the destination: ", event.target.i)
        // setTimeout(() => {
        //     destinationElement?.classList.remove("animated-social")
        //     console.log("removed class name")
        // }, 5000);
    }

    return (
        <React.Fragment >
            {props.showMenu && <div className='skills-box' ref={wrapperRef}>
                <ul>
                    <li id='menu-item'  className='skills' title='skills' onClick={handleScroll}>
                        {/* <a href="#skills">Skills</a> */}
                        Skills
                    </li>
                    <li id='menu-item'  className='focus' title='focus' onClick={handleScroll}>
                        {/* <a href="#skills">Skills</a> */}
                        See focus
                    </li>
                    <li id='menu-item'  className='contact' title='contact' onClick={handleScroll}>
                        {/* <a style={{ textDecorationColor: "none" }} href="#contact">Let's connect</a> */}
                        Let's connect
                    </li>
                    <li id='menu-item'  className='social' title='social' onClick={handleScroll}>
                        {/* <a style={{textDecorationColor: "none"}} href="#social">Social</a> */}
                        Social
                    </li>
                    <li id='menu-item'  className='3D-skills' title='3d-skills' onClick={handleScroll}>See Skills in 3D</li>
                </ul>
            </div>}
        </React.Fragment>
    )
}

export default AppMenu