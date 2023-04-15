import React from 'react'
import './About.css'
import ME from '../../assets/me.jpeg'
import {MdLanguage} from 'react-icons/md'
import {MdMyLocation} from 'react-icons/md'
import {FaGraduationCap} from 'react-icons/fa'
import Card from './Card'

const About = () => {
  return (
    <div className='about__container'>
      <div className='me__container'>
        <div className='me__background'>
          <div className='me__image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards-sub__container'>
          <Card icon={<FaGraduationCap/>} headline={'School'} lines={['University', 'of Potsdam']}/>
          <Card icon={<MdLanguage/>} headline={'Language'} lines={['English', 'German']}/>
        </div>
        <div className='cards-sub__container'>
          <Card icon={<MdMyLocation/>} headline={'Location'} lines={['Berlin', 'Germany']}/>
          <Card icon={<MdMyLocation/>} headline={'Location'} lines={['Berlin', 'Germany']}/>
        </div>
      </div>
    </div>
  )
}

export default About