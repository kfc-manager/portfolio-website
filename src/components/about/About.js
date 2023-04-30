import React from 'react'
import './About.css'
import ME from '../../assets/me.jpeg'
import {MdLanguage} from 'react-icons/md'
import {MdMyLocation} from 'react-icons/md'
import {FaGraduationCap} from 'react-icons/fa'
import Card from './Card'

const About = () => {
  return (
    <div className='container about__container'>
      <div className='me__container'>
        <div className='me__background'>
          <div className='me__image'>
            <img src={ME} alt='About me'/>
          </div>
        </div>
      </div>
      <div className='about-content__container'>
        <div className='cards__container'>
          <Card icon={<FaGraduationCap/>} headline={'School'} lines={['University', 'of Potsdam']}/>
          <Card icon={<MdLanguage/>} headline={'Language'} lines={['English', 'German']}/>
          <Card icon={<MdMyLocation/>} headline={'Location'} lines={['Berlin', 'Germany']}/>
        </div>
        <p className='about__text'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. 
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam voluptua. At 
          vero eos et accusam et justo duo dolores et ea rebum. Stet 
          clita kasd gubergren, no sea takimata sanctus est Lorem 
          ipsum dolor sit amet.
        </p>
      </div>
    </div>
  )
}

export default About