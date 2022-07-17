import React from 'react'
import './About.css'
import ME from '../../assents/me-about.jpg'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaRegFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='abaut'>
      <h5> Get To know</h5>
      <h2> About Me </h2>
      <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img  src={ME} alt='About Image'/>
              </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
             
              <article className='about__card'>
               <FaAward className='about__icon'/>
                <h5> Experience</h5>
                <small>Lorem Ipsum is simply</small>
              </article>
              
              <article className='about__card'>
               <FiUsers className='about__icon'/>
                <h5> Clients </h5>
                <small>Lorem Ipsum is simply</small>
              </article>
             
              <article className='about__card'>
               < FaRegFolderOpen className='about__icon'/>
                <h5> Projects </h5>
                <small> +40 projects</small>
              </article>
            </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure temporibus quod tempore, laboriosam exercitationem quas omnis accusantium magni, pariatur corporis maiores repudiandae. Molestiae porro molestias quas quis accusantium distinctio.
          
                  </p>
                        <a href='#contact' className='btn btn-primary'> Let's talk </a>
          </div>
      </div>

      </section>
  )
}

export default About