import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Habilidades</h5>
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <h3>FrontEnd Development</h3>
        <div className="experience__content">

          <article className="experience__details">
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Intermedio</small>
            </div>
          
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>CCS</h4>
              <small className='text-light'>Intermedio</small>
            </div>
            
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermedio</small>  
            </div>

          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Intermedio</small>
            </div>

          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Básico</small>
            </div>

          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
              <h4>NextJS</h4>
              <small className='text-light'>Básico</small>
            </div>

          </article>

        </div>

      </div>


    </section>
  )
}

export default Experience