import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import React from "react"
import HeaderBlog from "../components/Header/HeaderBlog"
import "../styles/blog-post.css"
import { graphql } from "gatsby"
import Footer from "../components/Footer"
import { DiscussionEmbed } from 'disqus-react'
import SEO from "../components/Seo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import Share from '../components/Share'

deckDeckGoHighlightElement();

export default function Template({ data }) {

  const { markdownRemark: post } = data
  const disqusShortName = 'naicheyoung'
    const disqusConfig = {
        identifier: data.markdownRemark.id, // you can define anything as "identifier" for each blog post
        title: data.markdownRemark.frontmatter.title,
        url: 'https://naicheyoung.com' + data.markdownRemark.frontmatter.path, 
    }
  const siteTitle = data.site.siteMetadata.title
  const twitter = data.site.siteMetadata.twitter
  const url = data.site.siteMetadata.domain
  return (
    <>
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.desc}
      />
      <HeaderBlog/>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div className="sub-heading">
            <p><FontAwesomeIcon icon={faCalendarAlt}/> Published: {post.frontmatter.date}</p>
            <p>
              <ul className="subheading-ul">
                <FontAwesomeIcon icon={faTag}/>
                {post.frontmatter.tags.map(tag => {
                  return (
                    <li><a href={`/${tag}`}>{tag}</a></li>
                  )
                })}
              </ul>
            </p>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
          <Share
            socialConfig={{
              twitter,
              config: {
                url: `${url}${post.frontmatter.path}`,
                title: post.frontmatter.title,
              },
            }}
            tags={post.frontmatter.tags}
          />
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
        title
        twitter
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