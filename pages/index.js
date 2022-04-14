import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

//components
import HeadSEO from '../components/seo/HeadSEO'
import ProductHighlights from '../components/landingpage/productHighlights'

//datas
import { getAllProductHighlights } from '../datas/productHighlights.js'
import { getServices } from '../datas/services'

//helpers
import { validUrl } from '../helpers/validUrl'



const Home = () => {

  


  const insertSeeAll = (arr, remaining, index) => {
    var s = arr
    var seeall = { id: 8, name: "See All", thumbnail: "/media/images/services/images/thumbnail.png" }
    s.splice(index, remaining, seeall)
    return s
  }

  const router = useRouter()
  const phd = getAllProductHighlights()

  var s = getServices()
  var na = []
  //dont use state just regular array function
  na.push(...s)
  //this will return the updated array value without altering the original services array
  var tv = insertSeeAll(na, 3, 7)


  return (
    <div>

      <HeadSEO
        TabTitle="Home"
        title="IWATA Air Cooler for Rent"
        description="IWATA evaporative air cooler for rent. Beat the heat! Guaranteed to blast cooler air and give comfort to your guests on special events. Great for indoor and outdoor activities."
      />

      <div className={styles.container} >

        <main>

          <section className={styles.intro}>
            <img
                src="/companylogo.png"
                id={styles.companyLogo}
            />

            <p id={styles.headerTitle} > Start your Day with rentacoolair </p>
            <p id={styles.headerSubtitle}>Trusted by Many love by everyone Nationwide.</p>
          </section>

            
          <ProductHighlights 
            phd={phd}
          />

          <section className={styles.serviceOffered}>

                <h1>We Service</h1>

                <br /><br />

                <div className={styles.serviceGrid}>
                  {tv.map( item => {

                    const urlString = validUrl(item.name)

                    const url = urlString === "seeall" ?  "/services" : `/${urlString}`

                    return (
                      <div className={styles.serviceOfferedCard} key={item.id} onClick={ () => router.push(url) }>

                            <img src={item.thumbnail} alt={item.thumbnail} />
                            <br />
                            <h4>{item.name}</h4>
                      </div>  
                    )
                  })}
                </div>
          </section>

          <section className={styles.requesAFreeQuote}>

                <button onClick={ () => router.push('/contactus') }>
                    REQUEST A FREE <br /> QUOTE
                </button>

          </section>
          
          <section>

                  <div className={styles.notice1}>
                      <p>
                      Advance booking is recommended as we get fully booked ahead of time especially during weekends.
                      </p>
                  </div>


                  <div className={styles.notice1}>
                      <p>
                      If you have questions, concerns or for quotations please do not hesitate to email us at rentacoolair@gmail.com or call us at the numbers posted below and let us know how we can help.
                      </p>
                  </div>

          </section>
        </main>
      </div>
    </div>
  )
}

export default Home