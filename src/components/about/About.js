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
        I am actively seeking opportunities to gain hands-on experience 
        in the fields of software engineering and data science. I believe 
        that an internship would provide me with valuable exposure to 
        real-world challenges and cutting-edge technologies, while allowing 
        me to contribute to meaningful projects and make a positive impact. 
        If you are interested in discussing internship opportunities or 
        learning more about my qualifications, please do not hesitate to contact 
        me. Thank you for considering my application!
        </p>
      </div>
    </div>
  )
}

export default About