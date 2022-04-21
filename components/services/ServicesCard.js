import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

//styles
import styles from '../../styles/components/ServicesCard.module.css'

const ServicesCard = ({ item }) => {

  const router = useRouter()

  return (
      <div className={styles.card}>
          
          <div className={styles.imageContainer}>
                <img src={item.thumbnail} alt={item.thumbnail} />
          </div>

          <div className={styles.details}>

                <p>{item.name}</p>

                <hr style={{ width: '50% '}}/>

                    <div className={styles.linkButton} onClick={ () => router.push(`/services/${item.id}`)} >
                        REQUEST <br /> A QUOTE
                    </div>
          </div>
      </div>
  )
}

export default ServicesCard