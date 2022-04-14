import React, { Fragment } from 'react'
import Navbar from '../navbar/Navbar.js'
import Footer from '../footer/Footer.js'

const Layout = (props) => {
  return (
    <Fragment>
        <Navbar />

        <main>
            {props.children}
        </main>

        <Footer/>
    </Fragment>
  )
}

export default Layout