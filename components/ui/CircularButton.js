import React from 'react'

//styles
import styles from '../../styles/components/ui/CircularButton.module.css'

const CircularButton = ({ icon, type, onChange }) => {
  
    switch (type) {
        case "main":
            return (
                <button className={styles.main} onClick={ () => onChange() } >
                    {icon}
                </button>
              )
        case "submit": 
            return (
                <button className={styles.submit} onClick={ () => onChange() } >
                    {icon}
                </button>
            )
        case "error": {
            return (
                <button className={styles.error} onClick={ () => onChange() } >
                    {icon}
                </button>
              )
        }
    }
}


export default CircularButton