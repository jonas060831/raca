import React from 'react'
import { useEffect, useState } from 'react'

//styles
import styles from '../../styles/Services.module.css'

//components
import HeadSEO from '../../components/seo/HeadSEO'
import ServicesCard from '../../components/services/ServicesCard'

//datas
import { getServices } from '../../datas/services'

const Services = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
        var s = getServices()
        setServices(s)
    }, [])

  return (
    <div>
        <HeadSEO
          TabTitle="Services"
          title="Iwata Air Cooler for rent Services Page"
          description="Services offered by Iwata Air Cooler"
        />

        <main>
            <div className={styles.container}>
              <section className={styles.servicesGrid} >
                { services.map( item => {
                  return (
                    <ServicesCard
                      item={item}
                      key={item.id}
                    />
                  )
                }) }
              </section>
            </div>
        </main>
    </div>
  )
}

export default Services


