import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

//components
import HeadSEO from '../components/seo/HeadSEO'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const phd = [
  {
    id: 1,
    title: "Its not just a regular fan",
    description: "Its not just a fan but it’s an Evaporative Air cooler guaranteed to blast cooler air and give comfort to your guests on special events.",
    image: "/product-highlight/fan+guy.png"
  },
  {
    id: 2,
    title: "Great for Outdoor Events also",
    description: "Will definitely works Indoor but great for outdoor Events as well. Tried and Tested by our Long Term Customers.",
    image: "/product-highlight/outdoor.png"
  },
  {
    id: 3,
    title: "Controlled Temperature Gaurenteed",
    description: "Iwata Evaporative Air Cooler will certainly bring down the air temperature lesser by about 5 degrees compared to any industrial fan.",
    image: "/product-highlight/fan+ice.png"
  },
  {
    id: 4,
    title: "Built for Bigger Wider spaces",
    description: "One big unit can comfortably cover 50 square meter area.",
    image: "/product-highlight/widerspace.png"
  }
]


const serviceImageCard = [
  {
    id: 1,
    image: '/services/images/Birthday.png',
    label: 'Birthday'
  },
  {
    id: 2,
    image: '/services/images/Office.png',
    label: 'Office'
  },
  {
    id: 3,
    image: '/services/images/Fiesta.png',
    label: 'Fiesta'
  },
  {
    id: 4,
    image: '/services/images/thumbnail.png',
    label: 'See All'
  }
]

const Home = () => {

  const router = useRouter()

  return (
    <div>

      <HeadSEO
        TabTitle="Home"
        title="IWATA Air Cooler for Rent"
        description="IWATA evaporative air cooler for rent. Beat the heat! Guaranteed to blast cooler air and give comfort to your guests on special events. Great for indoor and outdoor activities."
      />

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
            
          <section className={styles.productTraits}>
            <h1>Iwata Air Cooler for Rent</h1>
            <h3>Beat the Heat, No Sweat!</h3>
            <div className={styles.productHighlightGrid}>
              {phd.map( item => {
                return (
                  <div className={styles.phdItem} key={item.id}>

                    <div className={styles.imageContainer}>

                        <img src={item.image} alt={item.image} />
                    </div>

                    <br />
                    
                    <span id={styles.phdTitle}>{item.title}</span>
                    <br />
                    <br />

                    <span id={styles.phdDescription} >{item.description} </span>
                  </div>
                )
              })}
            </div>
          </section>


          <section className={styles.serviceOffered}>

                <h1>We Service</h1>

                <br /><br />

                <div className={styles.serviceGrid}>
                  {serviceImageCard.map( item => {
                    return (
                      <div className={styles.serviceOfferedCard} key={item.id} onClick={ () => router.push('/services') }>

                            <img src={item.image} alt={item.image} />
                            <br />
                            <h4>{item.label}</h4>
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


                  <div className={styles.notice2}>
                      <p>
                      If you have questions, concerns or for quotations please do not hesitate to email us at rentacoolair@gmail.com or call us at the numbers posted below and let us know how we can help.
                      </p>
                  </div>

          </section>

                
        </main>

        <Footer/>

      </div>
      
    </div>
  )
}


export default Home