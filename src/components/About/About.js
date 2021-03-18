import React, { Component } from 'react'
import "../../styles/index.css"
import "../../styles/about.css"

// Images
import HTMLimg from "../../images/skills/html5.png"
import CSSimg from "../../images/skills/css3.png"
import JSimg from "../../images/skills/javascript.png"
import REACTimg from "../../images/skills/react.png"
import NODEimg from "../../images/skills/node-js.png"
import EXimg from "../../images/skills/express.png"
import WPimg from "../../images/skills/wordpress.png"
import REDUXimg from "../../images/skills/redux.png"
import MONGOimg from "../../images/skills/mongodb.png"
import GITimg from "../../images/skills/git.png"
import SHOPIFYimg from "../../images/skills/shopify.png"
import MYimg from "../../images/skills/mysql.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faRocket, faCogs, faUsers);

export default class About extends Component {
    
    render () {
        return (
            <div id="about-cont">
                {/* ABOUT ME */}
                <div>
                    <h2 id="about">About Me</h2>
                    <p className="about-text">
                        I’m a Web Developer based in London (UK), with experience building web apps using the most popular CMS, WordPress, and the library React.js for the Front End with Node.js + MongoDB in the Back End.
                        <br/>I have studied a “Full Stack Developer Bootcamp” that gave me a deep vision of design and development, where I was able to work and team up with the other students. Currently focused on:<br/>
                        ✔️ WordPress & WooCommerce<br/>
                        ✔️ Shopify Websites<br/>
                        ✔️ MERN Stack <br/>
                        Development is my passion, and I love to create and learn new things, I hope to continue creating great projects and helping other developers.
                    </p>
                </div>
                {/* SERVICES CARDS */}
                <div className="about-card-cont">
                    <h2 id="Services"></h2>
                    <div className="about-card">
                        <FontAwesomeIcon icon="rocket" size="5x" className="about-icon"/>
                        <h3>Front-End</h3>
                        <p>Fully responsive designs, adaptable to all devices, following the latest ECMAScript standard, fast and fresh pages development</p>
                    </div>
                    <div className="about-card border-left">
                        <FontAwesomeIcon icon="cogs" size="5x"  className="about-icon"/>
                        <h3>Back-End</h3>
                        <p>Server-side applications development, database management in MongoDB and application creation using Express</p>
                    </div>
                    <div className="about-card border-left">
                        <FontAwesomeIcon icon="users" size="5x" className="about-icon"/>
                        <h3>Users</h3>
                        <p>Great capacity for teamwork, use of collaboration tools and exchange of ideas with colleagues and communication with clients</p>
                    </div>
                </div>
                {/* SKILLS TABLE */}
                <div id="skills-cont">
                    <div>
                        <h2 id="skills">Skills</h2>
                        <p style={{textAlign: "center"}}>All technologies I use</p>
                    </div>
                    <div className="skills-subcont">
                        <div className="skill">
                            <img src={HTMLimg} width="65" height="65" alt=""/> <p>HTML</p>
                        </div>
                        <div className="skill">
                            <img src={CSSimg} width="60" height="60" alt=""/> <p>CSS</p>
                        </div>
                        <div className="skill">
                            <img src={JSimg} width="55" height="55" alt=""/> <p>JavaScript</p>
                        </div>
                        <div className="skill">
                            <img src={REACTimg} width="60" height="60" alt=""/> <p>React</p>
                        </div>
                        <div className="skill">
                            <img src={NODEimg} width="60" height="60" alt=""/> <p>Node</p>
                        </div>
                        <div className="skill">
                            <img src={MONGOimg} width="60" height="60" alt=""/> <p>MongoDB</p>
                        </div>
                        <div className="skill">
                            <img src={EXimg} width="60" height="60" alt=""/> <p>Express</p>
                        </div>
                        <div className="skill">
                            <img src={REDUXimg} width="50" height="50" alt=""/> <p>Redux</p>
                        </div> 
                        <div className="skill">
                            <img src={WPimg} width="60" height="60" alt=""/> <p>WordPress</p>
                        </div>
                        <div className="skill">
                            <img src={SHOPIFYimg} width="60" height="60" alt=""/> <p>Shopify</p>
                        </div>
                        <div className="skill">
                            <img src={MYimg} width="60" height="60" alt=""/> <p>MySQL</p>
                        </div>
                        <div className="skill">
                            <img src={GITimg} width="60" height="60" alt=""/> <p>Git</p>
                        </div>
                    </div>
                    {/* CALL TO ACTION */}
                    <div class="call-to-action-home">
                        <h3>
                        Looking for a new website for your business?
                        </h3    >
                        <p>
                        <span role="img">⭐️</span> CONTACT ME OVER THE FORM TO DISCUSS YOUR REQUIREMENTS! <span role="img">⭐️</span>
                        </p>
                    </div>
                </div>
                
            </div>
        )
    }
}