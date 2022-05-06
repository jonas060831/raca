import React, { Fragment } from 'react'
import Navbar from '../navbar/Navbar.js'
import Footer from '../footer/Footer.js'
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Layout = (props) => {
  return (
    <Fragment>
        <Navbar />

        <main>
            {props.children}
        </main>
        
        <MessengerCustomerChat
          pageId="108805890955489"
          appId="336529318399861"
        />

        <Footer/>
    </Fragment>
  )
}

export default Layout