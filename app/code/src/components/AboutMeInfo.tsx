import { Paper } from "@mui/material";
import { useEffect } from "react";
import './AboutMeInfo.css'

function AboutMeInfo(props: any) {

    useEffect(() => {
        console.log("is loading ...")
    }, [])

    return (
        <Paper elevation={3} className="about_me_info">
        <div className="about_me_info_title">
            A little bit about me!
        </div>
        <div className='about_me_details'>
            I am passionate about computer programming,
            I learn very quickly and I love talking about tech.
            In fact, I love sharing what I know with others and ask if there is anything that I don't know.
            <br/>
            ~ I love talking about Design Patterns, 
            <br/>
            ~ I love logging, yeah application logs
        </div>
    </Paper>
    )
}

export default AboutMeInfo