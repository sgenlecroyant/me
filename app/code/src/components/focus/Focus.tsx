import { Facebook, GitHub, Instagram, LinkedIn, Mail, Twitter } from '@mui/icons-material'
import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import './focus.css'

function Focus() {


    return (
        <React.Fragment>
            <div className='my_focus_wrapper'>
                <div className='my_focus_title'>I Mainly focus on:</div>

                <div id="focus_tech">
                    <div id="backend" className='focus_column'>
                        Backend Development
                    </div>



                    <div id="distributed_systems" className='focus_column'>
                        Distributed Systems
                    </div>

                    <div id="big_data_processing" className='focus_column'>
                        Big Data Processing
                    </div>
                    <div id="microservices" className='focus_column'>
                        Microservices
                    </div>

                </div>

                <div className="connect_wrapper">
                    <div className="connect_with_me_title">
                        Hit me up on:
                    </div>
                    <div className="connect_with_me_socials">
                        <div>
                            
                            <a href="https://www.facebook.com/sgenlecroyant/">
                            <Facebook className="social_icon"/>
                            </a>
                        </div>
                        <div>
                            
                            <a href="https://www.github.com/sgenlecroyant/">
                            <GitHub className="social_icon"/>
                            </a>
                        </div>
                        <div>
                            
                            <a href="https://www.twitter.com/sgenlecroyant/">
                            <Twitter className="social_icon"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/sgenlecroyant/">
                            <Instagram className="social_icon"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://https://www.linkedin.com/in/sgenlecroyant/">
                            <LinkedIn className="social_icon"/>
                            </a>
                        </div>
                        <div>
                            <a href="mailto:sgenlecroyant@gmail.com"><Mail className="social_icon"/></a>
                        </div>
                        
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Focus