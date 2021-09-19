import React, { Component } from 'react'
import '../styles/social.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)

export default class Social extends Component {
  render () {
    return (
            <div className="social-cont">
                <a href="https://github.com/nai-young" className="social-item"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <a href="https://twitter.com/naiche_young" className="social-item"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
                <a href="https://www.linkedin.com/in/naicheyoung" className="social-item"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
                <a href="mailto:contact@naicheyoung.com" className="social-item"><FontAwesomeIcon icon="envelope"/></a>
            </div>
    )
  }
}
