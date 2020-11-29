import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      Unfortunately we can't find the page you're looking for, please return to
      the home page.
    </h1>
  </Layout>
)

export default NotFoundPage
