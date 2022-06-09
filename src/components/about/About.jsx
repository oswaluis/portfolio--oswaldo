import React from 'react'
import './about.css'
import IMG from '../../assets/GO.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GiFiles} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce un poco</h5>
      <h2>Acerca de mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>Junior</small>
            </article>
          
          
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>2</small>
            </article>
          
          
            <article className="about__card">
              <GiFiles className='about__icon'/>
              <h5>Proyectos</h5>
              <small>3</small>
            </article>
          </div>
          <p>Soy ingeniero mecánico y me desempeñé en esa área profesional durante varios
años. Actualmente quiero dedicarme a la programación FrontEnd, por lo que he estado
adquiriendo conocimientos y habilidades en esta área. Estoy buscando
una oportunidad laboral que permita desarrollarme, alcanzar nuevos retos y
experiencias profesionales.</p>
          <a href="#contact" className='btn btn-primary'>Contáctame</a>
        </div>
      </div>
    </section>
  )
}

export default About