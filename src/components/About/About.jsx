import React from 'react'
import './About.css'
import profile from '../../assets/profile_img.png'
import theme from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div className='about-page'>
        <div className='title-container'>
             <h1 className='title'>About me</h1>
             <img className='title-img' src={theme} alt="" />
        </div>
        <div className='about-container'>
            <div className="left">
                <img className='about-img' src={profile} alt="" />
            </div>
            <div className="right">
                <div className='right-content'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem rerum molestiae dolore blanditiis? Dolor vero, quam eveniet vel, similique quia iste laudantium voluptate, dicta ratione quo? Reiciendis, ullam officia?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at consequuntur enim ullam eius perspiciatis asperiores doloribus nam. Nisi, nihil?</p>
                </div>
                <div className="right-items">
                    <p>html</p>
                    <p>css</p>
                    <p>js</p>
                    <p>express</p>
                </div>
            </div>
         </div>   
    </div>
  )
}

export default About