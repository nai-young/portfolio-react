import React, { Component } from 'react'
import '../styles/footer.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)

export default class Footer extends Component {
  render () {
    return (
            <>
                <div className="footer-first">
                    <h3>KEEP IN TOUCH <span role="img" arial-label="emoji">👇🏼</span></h3>
                    <div className="footer-social-cont">
                        <a href="https://github.com/nai-young" className="footer-social-item" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                        <a href="https://twitter.com/naiche_young" className="footer-social-item" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']}/></a>
                        <a href="https://www.linkedin.com/in/naicheyoung" className="footer-social-item" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
                        <a href="mailto:contact@naicheyoung.com" className="footer-social-item" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="envelope"/></a>
                    </div>
                </div>
                <div className="footer-second">
                    <div className="footer-navbar">
                        <ul>
                            <p>Quick Links</p>
                            <li><a href="/#home">Home</a></li>
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#projects">Projects</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                        <ul>
                            <p>Contact</p>
                            <li><a href="mailto:contact@naicheyoung.com" target="_blank" rel="noreferrer">Email</a></li>
                            <li><a href="https://www.linkedin.com/in/naicheyoung" target="_blank" rel="noreferrer">LinkedIn</a></li>
                            <li><a href="https://twitter.com/naiche_young" target="_blank" rel="noreferrer">Twitter</a></li>
                            <li><a href="https://github.com/nai-young" target="_blank" rel="noreferrer">Github</a></li>
                        </ul>
                        <ul>
                            <p>Legal</p>
                            <li><a href="/cookies" target="_blank" rel="noreferrer">Cookies</a></li>
                            <li><a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                        </ul>
                        <ul>
                            <p><span role="img">✨</span> Support</p>
                            <li><a href="https://www.buymeacoffee.com/naiyoung" target="_blank" rel="noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="buy-me-a-coffe"/></a></li>
                        </ul>
                    </div>
                    {/* <p>Copyright © {new Date().getFullYear()} | Naiche</p> */}
                </div>
            </>
    )
  }
}
