import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'
import { Helmet } from 'react-helmet'

import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Home from '../components/Home/Home'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer'

import '../styles/index.css'

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
deckDeckGoHighlightElement()

const IndexPage = () => {
  return (
    <Layout>
      <div id="home-cont">
        <Helmet>
          <title>Home | NAICHE L. YOUNG</title>
          <meta name="title" content="Home | NAICHE L. YOUNG" />
          <meta
            name="description"
            content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta property="og:title" content="Home | NAICHE L. YOUNG" />
          <meta
            property="og:description"
            content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
          />
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta property="twitter:title" content="Home | NAICHE L. YOUNG" />
          <meta
            property="twitter:description"
            content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />
        </Helmet>
        {/* <SEO title= 'Home | NAICHE L. YOUNG'/> */}
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
