import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>¿Que puedo ofrecer?</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Mis servicios</h3>
          </div>
            
            <ul className="service__list">
              <li><BiCheck className='service__list-icon'/>Maquetado Web</li>
              <li><BiCheck className='service__list-icon'/>Desarrollo de páginas web</li>
              <li><BiCheck className='service__list-icon'/>Mantenimiento de páginas web</li>
              <li><BiCheck className='service__list-icon'/>Actualización de páginas web</li>
              <li><BiCheck className='service__list-icon'/>Revisión de código</li>
              <li><BiCheck className='service__list-icon'/>Optimización de código</li>
            </ul>
          
        </article>
      </div>

    </section>
  )
}

export default Services