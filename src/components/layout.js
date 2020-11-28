/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Nav from "./Nav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with &#9825; by Jen Beltran
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
