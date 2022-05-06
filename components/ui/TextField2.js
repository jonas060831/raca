import React from 'react'

//styles
import styles from '../../styles/components/ui/Textfield.module.css'

const TextField2 = ({ value, name, placeholder, onChange, icon, onContactValueChange }) => {
  
  return (
      <div className={styles.inputcontainer}>
          <span>{icon}</span>
          <input
            type="text"
            value={value}
            name={name}
            // ref={autoFocus}
            placeholder={placeholder}
            onChange={ onChange }
            onBlur={ () => { onContactValueChange() } }
          />
      </div>
  )
}

export default TextField2