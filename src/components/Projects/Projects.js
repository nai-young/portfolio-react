import React, { Component } from 'react'
import '../../styles/index.css'
import '../../styles/projects.css'

import imgProjectFilms from "../../images/projects/project_films.png"
import imgCLientsCrud from '../../images/projects/clients_crud.png'
import imgUrlShortener from "../../images/projects/url_shortener.png"
import imgWeatherApp from '../../images/projects/weather_app.png'
import imgPetSupply from '../../images/projects/pet_supply.png'
import imgRecipes from '../../images/projects/recipes.png'
import imgConsulting from '../../images/projects/consulting.png'
import imgYoga from '../../images/projects/yoga.png'

export default class Projects extends Component {
    render () {
        return (
            <div id="projects-cont">
                <div>
                    <h2 id="projects"> My Projects </h2>
                    <p style={{textAlign: "center", marginTop: "1rem", marginBottom: "3rem"}}>Check out my latests projects</p>
                </div>
                
                <div className="projects-subcont">
                    {/* <div className="project">
                        <div className="soon"><img src={imgConsulting} alt="project"/></div>
                        <div className="buttons">   
                            <a className="project-button" href="#" target="_blank" rel="noreferrer">DEMO</a>
                            <a className="project-button" href="#" target="_blank" rel="noreferrer">SOURCE</a>
                        </div>
                    </div> */}
                    <div className="project">
                        <div className="soon"><img src={imgPetSupply} alt="project"/></div>
                        <div className="buttons">   
                            <a className="project-button" href="https://www.petsupplystore.ml/" target="_blank" rel="noreferrer">DEMO</a>
                            <a className="project-button" href="https://www.petsupplystore.ml/" target="_blank" rel="noreferrer">SOURCE</a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="soon"><img src={imgYoga} alt="project"/></div>
                        <div className="buttons">   
                            <a className="project-button" href="#" target="_blank" rel="noreferrer">DEMO</a>
                            <a className="project-button" href="#" target="_blank" rel="noreferrer">SOURCE</a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="soon"><img src={imgCLientsCrud} alt="project"/></div>
                        <div className="buttons">   
                            <a className="project-button" href="https://clientscrud.herokuapp.com/" target="_blank" rel="noreferrer">DEMO</a>
                            <a className="project-button" href="https://github.com/nai-young/clients_api_crud" target="_blank" rel="noreferrer">SOURCE</a>
                        </div>
                    </div>
                    {/* <div className="project">
                        <div className="soon"><img src={imgProjectFilms} alt="project"/></div>
                        <div className="buttons">   
                            <a href="https://filmsplatform.netlify.app" className="project-button" target="_blank" rel="noreferrer">DEMO</a>
                            <a href="https://github.com/nai-young/digital_platform" className="project-button" target="_blank" rel="noreferrer">SOURCE</a>
                        </div>
                    </div> */}
                    
                    <div className="project">
                        <div className="soon"><img src={imgUrlShortener} alt="project"/></div>
                        <div className="buttons">   
                            <a className="project-button" href="https://urlshortapi.herokuapp.com/" target="_blank" rel="noreferrer">DEMO</a>
                            <a className="project-button" href="https://github.com/nai-young/url_shortener" target="_blank" rel="noreferrer">SOURCE</a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="soon"><img src={imgWeatherApp} alt="project"/></div>
                        <div className="buttons">   
                            <a className="project-button" href="https://wheaterapi.herokuapp.com/" target="_blank" rel="noreferrer">DEMO</a>
                            <a className="project-button" href="https://github.com/nai-young/weather_app" target="_blank" rel="noreferrer">SOURCE</a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="soon"><img src={imgRecipes} alt="project"/></div>
                        <div className="buttons">   
                            <a className="project-button" href="#" target="_blank" rel="noreferrer">DEMO</a>
                            <a className="project-button" href="https://github.com/nai-young/recipes_app" target="_blank" rel="noreferrer">SOURCE</a>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/nai-young">More</a>  
            </div>
        )
    }
}
