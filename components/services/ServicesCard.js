import Link from 'next/link'
import React from 'react'

//styles
import styles from '../../styles/components/ServicesCard.module.css'

//helpers
import { validUrl } from '../../helpers/validUrl'


const ServicesCard = ({ item }) => {

  const urlString = validUrl(item.name)

  return (
      <div className={styles.card}>
          
          <div className={styles.imageContainer}>
                <img src={item.thumbnail} alt={item.thumbnail} />
          </div>

          <div className={styles.details}>

                <h3>{item.name}</h3>
                <hr style={{ width: '50% '}}/>
                <Link href={`/services/${urlString}`}>
                    <div className={styles.linkButton}>
                        REQUEST A QUOTE
                    </div>
                </Link>

          </div>
      </div>
  )
}

export default ServicesCard