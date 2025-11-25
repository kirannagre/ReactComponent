import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>All rights reserved by &copy; Niyaz & kiran</p>
        <ul>
            <li><a href="https://github.com/kirannagre"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/kiran-nagre/"><FaLinkedin /></a></li>
            <li><a href="kirannagre2004@gmail.com"><SiGmail /></a></li>
        </ul>
    </div>
  )
}

export default Footer
