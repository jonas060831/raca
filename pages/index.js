import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//components
import HeadSEO from '../components/seo/HeadSEO'
import ProductHighlights from '../components/landingpage/productHighlights'
import BasicModal from '../components/modals/BasicModal'
import Button from '../components/ui/Button'

//datas
import { getAllProductHighlights } from '../datas/productHighlights.js'
import { getServices } from '../datas/services'

//helpers
import { validUrl } from '../helpers/validUrl'


const Home = () => {

  const [showModal, setShowModal] = useState(false);


  const insertSeeAll = (arr, remaining, index) => {
    var s = arr
    var seeall = { id: 8, name: "See All", thumbnail: "https://rentacoolair.s3.us-west-1.amazonaws.com/media/images/services/thumbnail.png" }
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
            <div
                
                id={styles.companyLogo}
            >
              <Image
                src="/companylogo.png"
                alt="/companylogo.png"
                width={500}
                height={300}
                layout='responsive'
                loading='lazy'
              />
            </div>

            <p id={styles.headerTitle} > Start your event with rentacoolair </p>
            <p id={styles.headerSubtitle}>trusted by many and loved by everyone.</p>
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

                    const url = urlString === "seeall" ?  "/services" : `/services/${item.id}`

                    return (
                      <div className={styles.serviceOfferedCard} key={item.id} onClick={ () => router.push(url) }>

                            <div>
                              <Image 
                                src={item.thumbnail} 
                                alt={item.thumbnail} 
                                width={128}
                                height={128}
                                layout='responsive'
                                loading='lazy'
                              />
                            </div>
                            <h4>{item.name}</h4>
                      </div>  
                    )
                  })}
                </div>
          </section>

          <section className={styles.requesAFreeQuote}>

                <button onClick={ () => router.push('/services') }>
                    REQUEST A FREE <br /> QUOTE
                </button>

          </section>

          <section className={styles.facebookreviews}>
            
            <div style={{ textAlign: 'center', fontSize: '1.5em' }}>
              <h1>Testimonials</h1>
              <h6 >Here&rsquo;s what our customers are saying about us:</h6>
            </div>
                  
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frenztorvicq%2Fposts%2F4868720663140019&show_text=true&width=500"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              
            >
            </iframe>

            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcailapiedad13%2Fposts%2F2790923777867383&show_text=true&width=500"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            >
            </iframe>

            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fheather.albis%2Fposts%2F4258899234134417&show_text=true&width=500"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              >
              </iframe>

          </section>

          <section styles={styles.checkusoutonfacebook}>

            
            <div className={styles.linktoFBContainer} >
              {/* <Link href="https://www.facebook.com/rentacoolair"> */}
                <Image
                  onClick={ () => {
                      setShowModal(true);
                      document.body.style.overflow = "hidden"
                  }}
                  src="/media/images/homepage/checkusout.jpg"
                  alt="/media/images/homepage/checkusout.jpg"
                  width={300}
                  height={150}
                />

              <BasicModal
                onClose={() => setShowModal(false)}
                show={showModal}
              >
                <h3>You are now trying to visit an External Link</h3>
                
                <h6>Click OK to Continue</h6>

                <Link href="https://www.facebook.com/rentacoolair">
                    <Button 
                      title="OK &nbsp;&nbsp;&nbsp;"
                      //icon={<Check/>}
                      iconRight={false}
                      type="main"
                      handleClick={ () => router.replace("https://www.facebook.com/rentacoolair") }
                    />
                </Link>
              </BasicModal>

            </div>

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