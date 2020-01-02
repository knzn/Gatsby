import React from "react"
import { Link } from "gatsby"

// Component import

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Roberto Dacles, A full-stack developer from philippines</h2>
      <p>
        Need A developer ? <Link to="/contact">Contact me!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
