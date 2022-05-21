import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


const ProductHighlights = ({ phd }) => {
  return (
    <section className={styles.productTraits}>
            <h1>Iwata Air Cooler for Rent</h1>
            <h3>Beat the Heat, No Sweat!</h3>
            <div className={styles.productHighlightGrid}>
              {phd.map( item => {
                return (
                  <div className={styles.phdItem} key={item.id}>

                    <div className={styles.imageContainer}>

                        <Image
                          src={item.image}
                          alt={item.image}
                          width={320}
                          height={200}
                        />

                    </div>
                    
                    <p id={styles.phdTitle}>{item.title}</p>

                    <p id={styles.phdDescription} >{item.description} </p>
                  </div>
                )
              })}
            </div>
    </section>
  )
}
export default ProductHighlights