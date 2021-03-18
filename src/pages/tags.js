import React from 'react';
import { Link, graphql } from "gatsby"
import Footer from "../components/Footer"
import '../styles/tags.css'
import HeaderBlog from "../components/Header/HeaderBlog"

function TagsPage(props) {
    const data = props.data.allMarkdownRemark.group
    return (
      <> 
        <HeaderBlog/>
        <div className="tags-container">
          <h1>Tags / Categories</h1>
          <ul className="tags-list">
            {
              data.map(tag => (
                <li>
                  <Link to={`/${tag.fieldValue}`} className="tags-links">
                    {tag.fieldValue} {`(${tag.totalCount})`}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <footer>
          <Footer/> 
        </footer>
      </>
    )

}

export default TagsPage;


export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }

`