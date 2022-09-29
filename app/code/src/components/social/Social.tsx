import { Facebook, GitHub, Instagram, LinkedIn, Mail, Twitter } from '@mui/icons-material'
import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import './social.css'

function Social() {

  return (
    <React.Fragment>
      <div className='social_wrapper_2'>
        <div className='social_title_2'>
          Hit me up on those platforms
        </div>

        <div className="connect_with_me_socials_2">
          <div>

            <a href="https://www.facebook.com/sgenlecroyant/">
              <Facebook className="social_icon" />
            </a>
          </div>
          <div>

            <a href="https://www.github.com/sgenlecroyant/">
              <GitHub className="social_icon" />
            </a>
          </div>
          <div>

            <a href="https://www.twitter.com/sgenlecroyant/">
              <Twitter className="social_icon" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/sgenlecroyant/">
              <Instagram className="social_icon" />
            </a>
          </div>
          <div>
            <a href="https://https://www.linkedin.com/in/sgenlecroyant/">
              <LinkedIn className="social_icon" />
            </a>
          </div>
          <div>
            <a href="mailto:sgenlecroyant@gmail.com"><Mail className="social_icon" /></a>
          </div>

        </div>

      </div>
    </React.Fragment>)
}

export default Social