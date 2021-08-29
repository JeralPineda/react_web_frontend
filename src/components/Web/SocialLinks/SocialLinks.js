import React from 'react';

import { ReactComponent as YoutubeIcon } from '../../../assets/img/svg/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/img/svg/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/img/svg/facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/img/svg/linkedin.svg';

import './SocialLinks.scss';

const SocialLinks = () => {
   return (
      <div className='social-links'>
         <a className='youtube' href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
            <YoutubeIcon />
         </a>

         <a className='twitter' href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <TwitterIcon />
         </a>

         <a className='facebook' href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FacebookIcon />
         </a>

         <a className='linkedin' href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <LinkedinIcon />
         </a>
      </div>
   );
};

export default SocialLinks;
