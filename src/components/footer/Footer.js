import React from 'react'
import './Footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {MdMailOutline} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='footer__container'>
        <h1 className='footer__headline'>
            Contact me via
        </h1>
        <div className='contact__container'>
            <div className='link__container'>
                <a className='link' href='https://github.com/kfc-manager' target='_blank' rel='noreferrer'><BsGithub/></a>
                <a className='link' href='https://www.linkedin.com/in/kilian-calefice-825869272' target='_blank' rel='noreferrer'><BsLinkedin/></a>
            </div>
            <div className='mail__container'>
                <MdMailOutline/>
                <h1 className='address'>calefice@aol.com</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer