import React from "react"
import { Link } from "gatsby"

// Component import
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>
        <strong>Name</strong>: Roberto Dacles
      </p>
      <p>
        <Link to="/contact">Want to work with me ?</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
