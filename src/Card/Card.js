import React from 'react'
import './Card.css'
import profilePic from '../Assets/received_231518876607829.jpeg'
import linkedin from '../Assets/Svg.js'


function Card() {
  return (
    <div className='card-container'>
        <div className='image-card-container'>
        <img src={profilePic} alt="Me and my wife" />
        </div>
        <div className='info-container'>
        <h1>Hassan Wilson</h1>
        <h2>Front end Developer</h2>
        <h3>Georgetown, TX</h3>
        </div>
        <div className='button-container'>
            <a href="tel:+17373147528"><button className='btn call-btn'>Call</button></a>
            <a href="mailto:knitex303@gmail.com"><button className='btn email-btn'>Email</button></a>
            <a href="https://www.linkedin.com/in/hassan-wilson-55774323b/" target='blank'><button className='btn linkedin-btn'>Linked{linkedin}</button></a>
        </div>
        <div className='article-container'>
            <h3>About</h3>
            <h4>I am a Frontend Developer based out of the Greater Austin area in Texas</h4>
            <p>I am 33 years old and love creating innovative, solid and scalable frontend products that live on the internet.</p>
        </div>
        
        <div className='progressbar-container'>
        <h3>Skills</h3>
            <div className='progress-bar'>
            <div class="progress" style={{width: '90%'}}>
              <p class="title">HTML5</p>
              <p class="percentage">90%</p>
            </div>
            </div>
            <div className='progress-bar'>
            <div class="progress" style={{width: '90%'}}>
              <p class="title">CSS#</p>
              <p class="percentage">90%</p>
            </div>
            </div>
            <div className='progress-bar'>
            <div class="progress" style={{width: '80%'}}>
              <p class="title">SASS</p>
              <p class="percentage">80%</p>
            </div>
            </div>
            <div className='progress-bar'>
            <div class="progress" style={{width: '85%'}}>
              <p class="title">Javascript</p>
              <p class="percentage">85%</p>
            </div>
            </div>
            <div className='progress-bar'>
            <div class="progress" style={{width: '85%'}}>
              <p class="title">Typescript</p>
              <p class="percentage">85%</p>
            </div>
            </div>
            <div className='progress-bar'>
            <div class="progress" style={{width: '85%'}}>
              <p class="title">React</p>
              <p class="percentage">85%</p>
            </div>
            </div> 
        </div>
    </div>

  )
}

export default Card