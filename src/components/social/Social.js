import React from 'react'
import './Social.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Social = () =>{

  return (
    <div className='social__container'>
      <a href='https://github.com/kfc-manager' target='_blank' rel='noreferrer'><BsGithub className='social__icon'/></a>
      <a href='https://www.linkedin.com/in/kilian-calefice-825869272' target='_blank' rel='noreferrer'><BsLinkedin className='social__icon'/></a>
    </div>
  )
}

export default Social