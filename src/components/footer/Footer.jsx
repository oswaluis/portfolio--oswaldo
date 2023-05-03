import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Oswaldo Mendez</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca de mi</a></li>
        <li><a href="#experince">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/oswaldo-mendez-a72397bb/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/oswaluis" target="_blank"><BsGithub/></a>
      </div>
    </footer>
  )
}

export default Footer