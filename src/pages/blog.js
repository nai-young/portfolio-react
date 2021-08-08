import React from "react"
import SEO from "../components/seo"
import { Link, graphql} from "gatsby"
import HeaderBlog from "../components/Header/HeaderBlog"
import Footer from "../components/Footer"

import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import { far, faArrowAltCircleUp} from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(far, faArrowAltCircleUp, faCalendarAlt);

// export default function Index({ data }) 
export default class SubscribeForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleEmail = this.handleEmail.bind(this)
    
    this.state = {
      email: '',
      message: ''    
    }
  }

  handleEmail = (e) => {
      const target = e.target
      const value = target.value
      const name = target.name
      this.setState({
          [name]: value
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({ message: result.msg })
  }

  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    const { group: tags } = this.props.data.allMarkdownRemark
    return (
      <div className="blog-div">
        <SEO title="Blog" />
        <HeaderBlog/> 
        <div className="blog-container">
          <div className="sidebar">
            <div className="sidebar-categories">
              <p className="sidebar-categories-title">Categories</p>
              <ul className="ul-categories">
                {tags
                .map(tag => {
                  return(
                    <li>
                      <Link to={`/${tag.fieldValue}`} className="tags-links">
                        {tag.fieldValue}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="newsletter-sidebar">
              <form
                name="newsletter"
                method="post"
                action="/thank-you/"
                onSubmit={this.handleSubmit}
                // onSubmit={this.handleSubmit(email)}
                className="newsletter"
                id="newsletter"
              >
                <p className="email-field-newsletter">
                  <label for="email" className="input-email">Subscribe to the Newsletter</label>
                  <input type="email" required name="email" placeholder="Enter your email..." className="input-form" value={this.state.email} onChange={this.handleEmail}/>
                </p>
                <div className="message" dangerouslySetInnerHTML={{ __html: this.state.message}}/>
                <p>
                  <button type="submit" >Subscribe</button>
                </p>
              </form>
            </div>
          </div>
          <div className="posts-cont">
          <h2>Blog Posts</h2>
            {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
            return (
          
                <div className="post" key={post.id}>
                  <h1>
                      <Link to={post.frontmatter.path} className="post-title">{post.frontmatter.title}</Link>
                  </h1>
                  <h4>{post.frontmatter.date} <FontAwesomeIcon icon={faCalendarAlt}/></h4>
                  {/* <p>{post.frontmatter.desc}</p> */}
                  {<ul>
                    {post.frontmatter.tags.map(tag => {
                      return (
                        <li><a href={`/${tag}`}>{tag}</a></li>
                      )
                    })}
                  </ul>}
                </div>
            )
            })}
          </div>
        </div>
        <footer>
          <Footer/> 
        </footer>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            desc
            tags
          }
        }
      }
    }
  }
`