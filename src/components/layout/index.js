import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global";
import { Container } from "./styles";

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
