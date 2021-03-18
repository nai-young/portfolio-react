import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import React from "react"
import { Helmet } from "react-helmet"
import HeaderBlog from "../components/Header/HeaderBlog"
import "../styles/blog-post.css"
import { graphql } from "gatsby"
import Footer from "../components/Footer"
import { DiscussionEmbed } from 'disqus-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'

deckDeckGoHighlightElement();

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const disqusShortName = 'naicheyoung'
    const disqusConfig = {
        identifier: data.markdownRemark.id, // you can define anything as "identifier" for each blog post
        title: data.markdownRemark.frontmatter.title,
        url: 'https://naicheyoung.com' + data.markdownRemark.frontmatter.path, 
    }

  return (
    <>
      <HeaderBlog/>
      <div className="blog-post-container">
        <Helmet title={`${post.frontmatter.title} | NAICHE L. YOUNG`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div className="sub-heading">
            <p><FontAwesomeIcon icon={faCalendarAlt}/> Published: {post.frontmatter.date}</p>
            <p><FontAwesomeIcon icon={faTag}/>
              <a href={`/${post.frontmatter.tags}`}> {post.frontmatter.tags}</a>
            </p>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
        <div className="footer-post">
        <DiscussionEmbed className='comments' shortname={disqusShortName} config={disqusConfig}/>
        </div>
      <footer>
        <Footer/> 
      </footer>
  </>
  )   
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        domain: siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        tags
        date(formatString: "MMMM DD, YYYY")
        path
        title
        desc
      }
    }
  }
`