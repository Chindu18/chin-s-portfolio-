import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero-page'>
        <img src={profile} alt="" />
        <h1><span>i'm chin</span>,fullstack developer based in india</h1>
        <p>i am a mern stack developer,with fundumental knowledge of web app and experince in react + express. </p>
        <div className="hero-btn">
            <div className='hero-connect'>Connect with me</div>
            <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero