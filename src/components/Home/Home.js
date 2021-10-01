import React, { Component } from 'react'
import '../../styles/home.css'
import '../../styles/header.css'
import Social from '../Social'

export default class Home extends Component {
  render () {
    return (
      <div id="home-container">
        <div className="home-content">
          <h1>
            Hello. <br />
            I'm Naiche, a <span className="home-freelance">React</span>
            <br /> Front End Developer
          </h1>
          <p>
            I’m a <span className="home-text-color">React</span> Web Developer,
            code lover and passionate about computing,
            <br />
            spending my full time developing and practicing challenges, looking
            for new projects.
          </p>
          <Social />
          <button className="button">
            <a href="mailto:contact@naicheyoung.com">HIRE ME</a>
          </button>
        </div>
      </div>
    )
  }
}
