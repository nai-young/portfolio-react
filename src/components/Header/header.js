import React from "react"
import { Link } from "gatsby"

import '../../styles/header.css'
import '../../styles/home.css'

const Header = () => {
  return (
    <header className="header-cont">
      <h1>
        <Link to="/" className="title">
        NAICHE L. YOUNG
        </Link>
      </h1>
      <input type="checkbox" id="burger-checkbox"></input>
      <label for="burger-checkbox" class="burger-label"></label>
      <ul className="nav-ul">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="/blog">BLOG</a></li>
        </ul>
    </header>
  )
}

export default Header
