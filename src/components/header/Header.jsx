import React from 'react'
import './header.css'
import CTA from './CTA'
import FOTO from '../../assets/fototransp.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Oswaldo Mendez</h1>
        <h5 className="text-ligth">FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="personal__image">
          <img src={FOTO} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Ir abajo</a>
      </div>
    </header>
  )
}

export default Header