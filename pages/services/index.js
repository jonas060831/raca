import React from 'react'
import Head from 'next/head'
import Navbar from '../../components/navbar/Navbar'

import styles from '../../styles/Services.module.css'

const Services = () => {
  return (
    <div>

        <Head>
            <title>IWATA Air Cooler for Rent</title>
            <meta name="description" content="IWATA evaporative air cooler for rent. Beat the heat! Guaranteed to blast cooler air and give comfort to your guests on special events. Great for indoor and outdoor activities." />
            <meta property="og:title" content="IWATA Air Cooler for Rent" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

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


