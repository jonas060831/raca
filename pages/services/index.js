import React from 'react'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'

import styles from '../../styles/Services.module.css'

//components
import HeadSEO from '../../components/seo/HeadSEO';

const Services = () => {
  return (
    <div>

        <HeadSEO
          TabTitle="Services"
          title="Iwata Air Cooler for Rent"
          description="Services Offered"
        />

        <Navbar/>


        <div className={styles.container}>
            
            <header className={styles.servicesHeader}>
                <h1>Services page</h1>
            </header>

            <main>

            </main>

            <footer>

            </footer>
        </div>
        

    </div>
  )
}

export default Services


