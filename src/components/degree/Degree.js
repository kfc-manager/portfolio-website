import React from 'react'
import './Degree.css'
import Course from './Course'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';

const Degree = () => {

  const courses = [
    "Software Engineering I",
    "Software Engineering II",
    "Data- and Knowledge Base Systems",
    "Algorithmen und Datenstrukturen",
    "Theoretische Informatik I: Modellierungskonzepte",
    "Theoretische Informatik II: Effiziente Algorithmen",
    "Betriebssysteme und Rechnernetze",
    "Praxis der Programmierung",
    "Grundlagen der Programmierung",
    "Maschinenmodelle",
    "Stochastik",
    "Mathematik für Informatiker I (Analysis)",
    "Mathematik für Informatiker II (lineare Algebra)",
    "Mathematik für Informatiker III (Numerik)",
    "Experimentelle und kognitive Psychologie",
    "Kognition und Sprache",
    "Biologische Psychologie II"
    ]

  return (
    <div className='container degree__container'>
        <h1>Academic Degree</h1>
        <div className='degree__content'>
          <p className='degree__text'>
            So far these are the courses I successfully finished during
            my studies. I plan on finishing my bachelors degree
            in the summer of 2024. Through my studies, I have gained a deep 
            understanding of various programming languages, software 
            development methodologies, and algorithmic analysis.
          </p>
          <Swiper className='course__container' modules={[Pagination]} slidesPerView={1} spaceBetween={100} pagination={{ clickable: true }}>
            <SwiperSlide className='grid__container'>
              {courses.slice(0,6).map(item => { return <Course name={item}/> })}
            </SwiperSlide>
            <SwiperSlide className='grid__container'>
              {courses.slice(6,12).map(item => { return <Course name={item}/> })}
            </SwiperSlide>
            <SwiperSlide className='grid__container'>
              {courses.slice(12,17).map(item => { return <Course name={item}/> })}
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default Degree