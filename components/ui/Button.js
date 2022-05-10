import React from 'react'


//styles
import styles from '../../styles/components/ui/Button.module.css'

const Button = ({ title, type, icon, handleClick, iconRight, isSent }) => {
  

  const renderIcon = () => {
      
    if (iconRight) {
        return (
            <div className={styles.iconright} >   
                {title} 
                <span>
                    {icon}
                </span>
            </div>
        )
    }

    return (
        <div>
            <span>
                {icon}
            </span>
            {title} 
        </div>
    )
  }
  switch (type) {

      case 'main':
        return (
            <div className={styles.main}>
                <button
                    disabled={ isSent }
                    onClick={ (e) => handleClick(e) }
                >    
                    {renderIcon(icon, title )}   
                      
                </button>
            </div>
          )
      case 'error':
        return (
            <div className={styles.error}>
                <button
                    onClick={ () => handleClick() }
                >       
                    {renderIcon(icon, title )}

                </button>
            </div>
          )
          
  
      default:
          return (
              <button>
                  wrong
              </button>
          )
  }
  
}
export default Button