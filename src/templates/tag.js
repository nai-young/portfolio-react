import React from 'react';
import { Link, graphql } from 'gatsby'
import HeaderBlog from '../components/Header/HeaderBlog'
import '../styles/tags.css'
import Footer from '../components/Footer'

function Tags(props) {
    const posts = props.data.allMarkdownRemark.edges;
    const { tag } = props.pageContext;
    return (
        <div className="tag-page">
          <HeaderBlog/>
          <div className="tag-container">
            <h1>{`Category: ${tag}`}</h1>
            <div>
              <ul className="tag-list">
              {
                    posts.map(({ node }, i) => (
                        <li><Link to={node.frontmatter.path} key={i} >
                            {node.frontmatter.title}
                        </Link></li>
                    ))
                }
              </ul>
                
            </div>
          </div>
          <footer>
            <Footer/> 
        </footer>
        </div>
    )
}


export default Tags;


export const query = graphql`

 query TagsQuery($tag: String!) {
allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
          }
        }
      }
    }
}
`