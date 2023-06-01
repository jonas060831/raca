import React from 'react'
import styles from '../../styles/components/Footer.module.css';

const Footer = () => {

  return (
    <footer className={styles.footer}>

            <div>
                <h3>Mike</h3>
                <p>NCR (Metro Manila) & South Area</p>
                <p>0991-327-7474 </p>
                <p>0917-856-6881</p>
            </div>

            <div>
              <h3>We Service: </h3>
              <p><span>NCR - </span> National Capital Region</p>
              <p><span>North Area - </span>Bulacan, Pampanga <br/> as far as Tarlac City</p>
              <p><span>South Area - </span>Cavite, Laguna, <br/> as far as Batangas City</p>
            </div>
            <div>
                <br></br>
                <p>Email us at:</p>
                <h3>rentacoolair@gmail.com</h3>
                <h3>iwatarentacoolair@gmail.com</h3>
                <br></br>
            </div>
    </footer>
  )
}


export default Footer