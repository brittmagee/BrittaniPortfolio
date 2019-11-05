import React from 'react';

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

export default function PageFooter() {
  return (
    <div id="footer">
      <ul className="copyright">
        <li>&copy; 2019 Brittani Glynn Magee</li>
      </ul>
      <div id='footerLinks'>
        <a href='https://www.linkedin.com/in/brittanimagee/' target="_blank" rel="noopener noreferrer" >
          <LinkedInIcon/>
        </a>
        <a href='https://github.com/brittmagee' target="_blank" rel="noopener noreferrer" >
          <GitHubIcon />
        </a>
        <a href='https://brittani-glynn-magee.netlify.com/#contact' target="_blank" rel="noopener noreferrer" >
          <EmailIcon />
        </a>
        <a href='https://brittani-glynn-magee.netlify.com/' target="_blank" rel="noopener noreferrer" >
          <LinkIcon />
        </a>
      </div>
    </div>
  );
}
