import React, { Component } from "react"
import Layout from "../components/layout"

export default class ThankYouPage extends Component {

    render () {
        return (
            <Layout>
                <div className="thank-you-cont">
                    <h2>Contact</h2>
                    <p>Thank you for your submission!</p>
                    <a href="https://naicheyoung.com">Go Home</a>
                </div>
            </Layout>
        )
    }
}