import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/oswaldo-mendez-a72397bb/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/oswaluis" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial