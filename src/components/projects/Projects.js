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
            content: 'Spotify Party lets you share access to your account\'s play queue with your friends. I was looking to gather more experience at backend development and this seemed to be the perfect project to get more into it. As I already had a lot of experience with Java, the backend framework SpringBoot came immediately to mind. I also learned a lot about Spotify\'s REST Api.',
            source: 'https://github.com/kfc-manager/SpotifyParty'
        },
        {
            headline: 'This Website',
            content: 'I built this portfolio website to showcase my skills, experience, and projects to potential clients and employers. I wanted to demonstrate my work in a visually appealing and organized manner, while also providing easy access to my contact information. My skillset grew with this project as I had very little knowledge about web design before and I got more comfortable using JS, CSS, HTML and React.',
            source: 'https://github.com/kfc-manager/portfolio-website'
        },
        {
            headline: 'CustomShop',
            content: 'This is one of the more complex Minecraft plugins I created. It uses the spigot api to alter the behavior of the game. I also made use of the VaultAPI which makes the plugin automatically connect to an economy, added by an economy plugin and uses its currency to allow purchases in the custom creatable shop. It adds multiple commands to customize the shop and also a command to make the shop accessable to every player.',
            source: 'https://github.com/kfc-manager/CustomShop'
        },
        {
            headline: 'SyncedHealthBar',
            content: 'As the name already suggests this Minecraft plugin implements synchronized health bars in the game, which means that you can group players to one health bar so that they take damage, heal and die together! You can even create multiple health bars for a larger servers, where people should not share all the same health bar. It provides five commands to modify the health bars and group players to them.',
            source: 'https://github.com/kfc-manager/SyncedHealthBar'
        },
        {
            headline: 'CrazyPotionEffects',
            content: 'Originally this plugin was a request from a user on the r/MinecraftPlugin subreddit, which I decided to implement. The plugin adds permanent potion effects, which are obtained by either killing a player or by dying. It also adds an item, which can cure the negative effects. The effects and the recipe of the "cure"-item is fully configurable by .yml files, which are getting generated and initialized by the plugin.',
            source: 'https://github.com/kfc-manager/CrazyPotionEffects'
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