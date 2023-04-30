import React from 'react'
import './Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {

    const data = [
        {
            headline: 'Spotify Party',
            content: 'Spotify Party lets you share access to your account\'s play queue with your friends. I was looking to gather more experience at backend development and this seemed to be the perfect project to get more into it. As I already had a lot of experience with Java, the backend framework Spring Boot came immediately to mind. I also learned a lot about Spotify\'s REST Api.',
            source: 'https://github.com/kfc-manager/SpotifyParty'
        },
        {
            headline: 'This Website',
            content: 'I built this portfolio website to showcase my skills, experience, and projects to potential clients and employers. I wanted to demonstrate my work in a visually appealing and organized manner, while also providing easy access to my contact information. My skillset grew with this project as I had very little knowledge about web design before and I got more comfortable using JS, CSS, HTML and React.',
            source: 'https://github.com/kfc-manager/portfolio-website'
        }
      ]

    return (
        <div className='container projects__container'>
            <h1>My Projects</h1>
            <div className='projects'>
                <Swiper className='swiper' modules={[Pagination]} slidesPerView={1} spaceBetween={50} pagination={{ clickable: true }}>
                    {data.map(item => {
                        return <SwiperSlide className='slide'>
                                <h4 className='slide__headline'>
                                    {item.headline}
                                </h4>
                            <h5 className='slide__content'>{item.content}</h5>
                            <button className='source-button' onClick={() => { window.open(item.source) }}>GitHub</button>
                        </SwiperSlide>})
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Projects