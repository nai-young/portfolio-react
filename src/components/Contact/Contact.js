import React from 'react'
import { navigate } from 'gatsby-link'
import '../../styles/contact.css'

function encode (data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact () {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <div id="contact-cont">
      <h2 id="contact">Contact Me</h2>
      <p>I will answer you as soon as possible</p>
      <form
        name="contact"
        method="post"
        action="/thank-you/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="form"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p className="name-field">
          <label htmlFor="name" className="input-cont">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="input-form"
          />
        </p>
        <p className="email-field">
          <label htmlFor="email" className="input-cont">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
            onChange={handleChange}
            className="input-form"
          />
        </p>
        <p>
          <label htmlFor="message" className="input-cont msg-label">
            Message
          </label>
          <textarea
            name="message"
            required
            onChange={handleChange}
            className="input-form msg"
          />
        </p>
        <p>
          <button type="submit">SEND MESSAGE</button>
        </p>
      </form>
    </div>
  )
}
