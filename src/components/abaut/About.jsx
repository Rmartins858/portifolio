import React from 'react'
import './About.css'
import ME from '../../assents/107622400_726554424571978_4228930687232218956_n.jpg'

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
                  Meu nome é Rafael Martins, sou do Rio de Janeiro. Sou formado em Processos Gerenciais pela Universidade Veiga de Almeida. Atuei por 10 anos na área da segurança privada, após esse período tomei a decisão de fazer a transição de carreira. Sempre gostei de tecnologia, na facilitação, nas conexões que a tecnologia proporciona e nas evoluções e principalmente na área da saúde e educação. E essas coisas me fazem começar meus estudos nassa área. Hoje sou um estudante  e estou desenvolvendo minhas skills tanto a parte técnica quanto minhas habilidades interpessoais pela Trybe.  A cada dia eu me sinto mais confiante que esse é o meu caminho.
                  </p>
                        <a href='#contact' className='btn btn-primary'> Let's talk </a>
          </div>
      </div>

      </section>
  )
}

export default About