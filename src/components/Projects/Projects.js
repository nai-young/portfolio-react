/* eslint-disable no-tabs */
import React, { Component } from 'react'
import '../../styles/index.css'
import '../../styles/projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import imgCLientsCrud from '../../images/projects/clients_crud.png'
import imgUrlShortener from '../../images/projects/url_shortener.png'
import imgWeatherApp from '../../images/projects/weather_app.png'
import imgPetSupply from '../../images/projects/pet_supply.png'
import imgYoga from '../../images/projects/yoga.png'
import imgProductivity from '../../images/projects/productivity.jpg'

export default class Projects extends Component {
  render () {
    return (
        <div id="projects-cont">
            <div>
                <h2 id="projects"> My Projects </h2>
                <p style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '3rem' }}>Check out my latests projects</p>
            </div>
            <div className="projects-subcont">
                {/* First Project  */}
                <div className="project">
                    <div className="soon"><img src={imgProductivity} alt="project"/></div>
                    <div className="buttons">
                    <Popup
                        trigger={<button className="project-details"> Details</button>}
                        className="popup"
                        position="center"
                        modal
                        nested
                    >
                        {close => (
													<div className="projects-popup">
															<button className="close" onClick={close}></button>
															<div className="header"><h2>All in One Productivity App</h2></div>
															<div className="content">
																<p>• Tech Stack:</p>
																					<div className="lang-stack">
																<div className="lang">
																	<FontAwesomeIcon icon={['fab', 'html5']} className="projects-icons"/>
																	<p>HTML5</p>
																</div>
																<div className="lang">
																	<FontAwesomeIcon icon={['fab', 'css3-alt']} className="projects-icons"/>
																	<p>CSS3</p>
																</div>
																<div className="lang">
																	<FontAwesomeIcon icon={['fab', 'js']} className="projects-icons"/>
																	<p>JAVASCRIPT</p>
																</div>
																<div className="lang">
																	<FontAwesomeIcon icon={['fab', 'react']} className="projects-icons"/>
																	<p>REACT</p>
																</div>
																<div className="lang">
																	<FontAwesomeIcon icon={['fab', 'node']} className="projects-icons"/>
																	<p>NODE</p>
																</div>
																<div className="lang">
																	<FontAwesomeIcon icon={['fab', 'mongo']} className="projects-icons"/>
																	<p>MONGODB</p>
																</div>
																<div className="lang">
																	<FontAwesomeIcon icon={['fab', 'express']} className="projects-icons"/>
																	<p>EXPRESS</p>
																</div>
																<div className="lang">
																	<FontAwesomeIcon icon={['fab', 'tailwind']} className="projects-icons"/>
																	<p>TAILWINDCSS</p>
																</div>
															</div>
															<p>• Description:</p>
															<div className="description">
																<p>
																	Pomodoro Clock, Note taking, Todo List & Calendar view.<br/>
																	Fully Responsive design <br />
																	Features to add:
																	<ul>
																		<li>User authorization</li>
																		<li>UI implementations</li>
																		<li>Calendar tasks & meetings</li>
																		<li>Improve sidebar design</li>
																	</ul>
																</p>
																</div>
																<div className="buttons-container">
																		<a className="project-button button" href="https://productivity-track-in.herokuapp.com/" target="_blank" rel="noreferrer">DEMO</a>
																		<a className="project-button button" href="https://github.com/nai-young/productivity_track-in" target="_blank" rel="noreferrer">SOURCE</a>
																</div>
															</div>
													</div>
                        )}
                    </Popup>
                    </div>
                </div>
                {/* Second Project  */}
                <div className="project">
                    <div className="soon"><img src={imgCLientsCrud} alt="project"/></div>
                    <div className="buttons">
                        <Popup
									trigger={<button className="project-details"> Details</button>}
									className="popup"
									position="center"
									modal
									nested
                        >
									{close => (
										<div className="projects-popup">
											<button className="close" onClick={close}></button>
											<div className="header"><h2>Users Management API</h2></div>
											<div className="content">
												<p>• Tech Stack:</p>
												<div className="lang-stack">
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'html5']} className="projects-icons" />
														<p>HTML5</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'css3-alt']} className="projects-icons" />
														<p>CSS3</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'js']} className="projects-icons" />
														<p>JAVASCRIPT</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'react']} className="projects-icons" />
														<p>REACT</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'node']} className="projects-icons" />
														<p>NODE</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'mongo']} className="projects-icons" />
														<p>MONGODB</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'jsonwebtoken']} className="projects-icons" />
														<p>JSONWEBTOKEN</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'bootstrap']} className="projects-icons" />
														<p>BOOTSTRAP</p>
													</div>
												</div>
												<p>• Description:</p>
												<div className="description">
													<p>
														Full Stack application, users database management and JWT authorization.
														Features to add:
															<ul>
																<li>Register & Login UI design</li>
																<li>Private message users</li>
															</ul>
													</p>
												</div>
												<div className="buttons-container">
													<a className="project-button button" href="https://clientscrud.herokuapp.com/" target="_blank" rel="noreferrer">DEMO</a>
													<a className="project-button button" href="https://github.com/nai-young/users_crud" target="_blank" rel="noreferrer">SOURCE</a>
												</div>
											</div>
										</div>
									)}
                        </Popup>
                    </div>
                </div>
                {/* Third Project  */}
                <div className="project">
                    <div className="soon"><img src={imgYoga} alt="project"/></div>
                    <div className="buttons">
                    <Popup
                        trigger={<button className="project-details"> Details</button>}
                        className="popup"
                        position="center"
                        modal
                        nested
                    >
                        {close => (
                            <div className="projects-popup">
                                <button className="close" onClick={close}></button>
                                <div className="header"><h2>Yoga Class Booking Website</h2></div>
                                <div className="content">
																<p>• Tech Stack:</p>
                                    <div className="lang-stack">
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'html5']} className="projects-icons"/>
														<p>HTML5</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'css3-alt']} className="projects-icons"/>
														<p>CSS3</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'js']} className="projects-icons"/>
														<p>JAVASCRIPT</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'node']} className="projects-icons"/>
														<p>NODE</p>
													</div>
                                        <div className="lang">
														<FontAwesomeIcon icon={['fab', 'mongo']} className="projects-icons" />
														<p>MONGODB</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'express']} className="projects-icons"/>
														<p>EXPRESS</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'bootstrap']} className="projects-icons" />
														<p>BOOTSTRAP</p>
													</div>
                                    </div>
                                       <p>• Description:</p>
                                    <div className="description">
                                        <p>
                                          Online appointment scheduler Full Stack application. <br />
																					Calendar time block reservations & User confirmation message
                                        </p>
                                    </div>
                                    <div className="buttons-container">
                                        <a className="project-button button" href="#" target="_blank" rel="noreferrer">DEMO</a>
                                        <a className="project-button button" href="#" target="_blank" rel="noreferrer">SOURCE</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                    </div>
                </div>
                {/* Fourth Project  */}
                <div className="project">
                    <div className="soon"><img src={imgUrlShortener} alt="project"/></div>
                    <div className="buttons">
                    <Popup
                        trigger={<button className="project-details"> Details</button>}
                        className="popup"
                        position="center"
                        modal
                        nested
                    >
                        {close => (
                            <div className="projects-popup">
															<button className="close" onClick={close}></button>
															<div className="header"><h2>URL Shortener</h2></div>
															<div className="content">
															<p>• Tech Stack:</p>
															<div className="lang-stack">
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'html5']} className="projects-icons"/>
														<p>HTML5</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'css3-alt']} className="projects-icons"/>
														<p>CSS3</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'js']} className="projects-icons"/>
														<p>JAVASCRIPT</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'node']} className="projects-icons"/>
														<p>NODE</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'mongo']} className="projects-icons" />
														<p>MONGODB</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'express']} className="projects-icons"/>
														<p>EXPRESS</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'mongoose']} className="projects-icons"/>
														<p>MONGOOSE</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'EJS']} className="projects-icons"/>
														<p>.EJS</p>
													</div>
													</div>
														<p>• Description:</p>
													<div className="description">
														<p>
															Custom URL shortener service <br />
															Backend API
														</p>
													</div>
													<div className="buttons-container">
														<a className="project-button button" href="https://urlshortapi.herokuapp.com/" target="_blank" rel="noreferrer">DEMO</a>
														<a className="project-button button" href="https://github.com/nai-young/url_shortener" target="_blank" rel="noreferrer">SOURCE</a>
													</div>
                                </div>
                            </div>

                        )}
                    </Popup>
                    </div>
                </div>
                {/* Fifth Project  */}
                <div className="project">
                    <div className="soon"><img src={imgPetSupply} alt="project"/></div>
                    <div className="buttons">
                    <Popup
                        trigger={<button className="project-details"> Details</button>}
                        className="popup"
                        position="center"
                        modal
                        nested
                    >
                        {close => (
                            <div className="projects-popup">
                                <button className="close" onClick={close}></button>
                                <div className="header"><h2>Pets Supply eCommerce</h2></div>
                                <div className="content">
																<p>• Tech Stack:</p>
                                    <div className="lang-stack">
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'html5']} className="projects-icons"/>
														<p>HTML5</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'css3-alt']} className="projects-icons"/>
														<p>CSS3</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'js']} className="projects-icons"/>
														<p>JAVASCRIPT</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'wordpress']} className="projects-icons"/>
														<p>WORDPRESS</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'woocommerce']} className="projects-icons"/>
														<p>WOOCOMMERCE</p>
													</div>
                                        <div className="lang">
                                            <FontAwesomeIcon icon={['fab', 'php']} className="projects-icons"/>
                                            <p>PHP</p>
                                        </div>
                                    </div>
													<p>• Description:</p>
                                    <div className="description">
													<p>
														WordPress eCommerce template
													</p>
                                    </div>
                                    <div className="buttons-container">
													<a className="project-button button" href="https://www.petsupplystore.ml/" target="_blank" rel="noreferrer">DEMO</a>
													<a className="project-button button" href="https://www.petsupplystore.ml/" target="_blank" rel="noreferrer">SOURCE</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                    </div>
                </div>
                {/* Sixth Project  */}
                <div className="project">
                    <div className="soon"><img src={imgWeatherApp} alt="project"/></div>
                    <div className="buttons">
                    <Popup
                        trigger={<button className="project-details"> Details</button>}
                        className="popup"
                        position="center"
                        modal
                        nested
                    >
                        {close => (
                            <div className="projects-popup">
                                <button className="close" onClick={close}></button>
                                <div className="header"><h2>Weather App</h2></div>
                                <div className="content">
                                    <p>• Tech Stack:</p>
                                    <div className="lang-stack">
                                        <div className="lang">
                                            <FontAwesomeIcon icon={['fab', 'html5']} className="projects-icons"/>
                                            <p>HTML5</p>
                                        </div>
                                        <div className="lang">
                                            <FontAwesomeIcon icon={['fab', 'css3-alt']} className="projects-icons"/>
                                            <p>CSS3</p>
                                        </div>
                                        <div className="lang">
                                            <FontAwesomeIcon icon={['fab', 'js']} className="projects-icons"/>
                                            <p>JAVASCRIPT</p>
                                        </div>
                                        <div className="lang">
														<FontAwesomeIcon icon={['fab', 'node']} className="projects-icons"/>
														<p>NODE</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'ejs']} className="projects-icons"/>
														<p>.EJS</p>
													</div>
													<div className="lang">
														<FontAwesomeIcon icon={['fab', 'tailwind']} className="projects-icons"/>
														<p>TAILWINDCSS</p>
													</div>
                                    </div>
                                    <p>• Description:</p>
                                    <div className="description">
                                        <p>
														Weather application based in location <br />
														Open Weather Map API request and Front End display
                                        </p>
                                    </div>
                                    <div className="buttons-container">
                                        <a className="project-button button" href="https://wheaterapi.herokuapp.com/" target="_blank" rel="noreferrer">DEMO</a>
                                        <a className="project-button button" href="https://github.com/nai-young/weather_app" target="_blank" rel="noreferrer">SOURCE</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                    </div>
                </div>
            </div>
            <a href="https://github.com/nai-young">More</a>
        </div>
    )
  }
}
