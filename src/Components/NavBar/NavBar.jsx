import React from 'react'
import { useContext } from 'react';
import Logo from '../../assets/spotify_logo.svg'
import MyContext from '../../Data/theme/MyContext';
import PFP from '../../assets/Pratyush_devloper-logo.jpg'
import './navbar.css'

const NavBar = () => {
  return (
    <header>
      <section id="logo-sec">
        <div id="logo">
          <img src={Logo} alt="" />
        </div>
        <span>Spotify</span>
      </section>
      <section id='main-sec'>
        <div id="circle-account">
          <img src={PFP} alt="account profile picture" />
        </div>
      </section>
    </header>
  )
}

export default NavBar
