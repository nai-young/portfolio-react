import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Home from '../components/Home/Home'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer'

import '../styles/index.css'

const IndexPage = () => {
  
  return (
    <Layout>
      <div id="home-cont">
        <SEO title="Home" />
        <Home/>
        <About/>
        <Projects />
        <Contact />
        <Footer />
      </div>
  </Layout>
  )
}

export default IndexPage
