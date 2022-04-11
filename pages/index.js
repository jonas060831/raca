import Head from 'next/head'
import styles from '../styles/Home.module.css'

//components
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Head>
        <title>IWATA Air Cooler for Rent</title>
        <meta name="description" content="IWATA evaporative air cooler for rent. Beat the heat! Guaranteed to blast cooler air and give comfort to your guests on special events. Great for indoor and outdoor activities." />
        <meta property="og:title" content="IWATA Air Cooler for Rent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <div className={styles.container} >

        <header className={styles.header}>
          <img
            src="/companylogo.png"
            id={styles.companyLogo}
          />

          <p id={styles.headerTitle} > Start your Day with rentacoolair </p>
          <p id={styles.headerSubtitle}>Trusted by Many love by everyone Nationwide.</p>

        </header>

        <main className={styles.main}>
            
                
        </main>

        <footer className={styles.footer}>
        
        </footer>
      </div>
      
    </div>
  )
}


export default Home