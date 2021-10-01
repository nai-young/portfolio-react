import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "../styles/blog-post.css"

export default class NewsletterPost extends React.Component {
  constructor(props) {
    super(props)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      email: "",
      message: "",
    }
  }

  handleEmail = e => {
    // this.setState({ email: e.target.value })
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({ message: result.msg })
  }

  render() {
    return (
      <div className="newsletter-post">
        <form
          name="newsletter"
          method="post"
          action="/thank-you/"
          onSubmit={this.handleSubmit}
          className="newsletter"
          id="newsletter"
        >
          <p className="email-field-newsletter">
            <label for="email" className="input-email">
              Subscribe to the Newsletter
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={this.handleEmail}
              placeholder="Enter your email..."
              className="input-form"
            />
          </p>
          <div
            className="message"
            dangerouslySetInnerHTML={{ __html: this.state.message }}
          />
          <p>
            <button type="submit">Subscribe</button>
          </p>
        </form>
      </div>
    )
  }
}
