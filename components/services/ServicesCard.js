import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

//styles
import styles from '../../styles/components/ServicesCard.module.css'

const ServicesCard = ({ item }) => {

  const router = useRouter()

  console.log(item.thumbnail)

  return (
      <div className={styles.card}>
          
          <div className={styles.imageContainer}>
                <div>
                    <Image
                        src={item.thumbnail}
                        alt={item.thumbnail} 
                        width={500}
                        height={450}
                        layout='responsive'
                        loading='lazy'
                    />
                </div>
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