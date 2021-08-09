import React from "react"
import { Link,  useStaticQuery  } from "gatsby"
import PropTypes from "prop-types"
import "../../styles/blog.css"
import { graphql } from 'gatsby'

const HeaderBlog = () => {

    const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div className="header-blog">
            <h1>
                <Link to="/" className="title">
                {data.site.siteMetadata.title}
                </Link>
            </h1>
            <input type="checkbox" id="burger-checkbox"></input>
            <label htmlFor="burger-checkbox" className="burger-label"></label>
            <ul className="blog-nav">
              <li><Link to="/" >HOME</Link></li>
              <li><Link to="/#contact" >CONTACT</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
            </ul>
        </div>
        
    )
}
HeaderBlog.propTypes = {
    siteTitle: PropTypes.string,
  }
  
HeaderBlog.defaultProps = {
    siteTitle: ``,
  }
export default HeaderBlog;