import React from 'react'

//styles
import styles from '../../styles/components/ui/Textfield.module.css'

const TextField = ({ value, name, placeholder, onChange, icon, autoFocus, onLocationValueChange }) => {
  
  return (
      <div className={styles.inputcontainer}>
          <span>{icon}</span>
          <input
            type="text"
            value={value}
            name={name}
            ref={autoFocus}
            placeholder={placeholder}
            onChange={ onChange }
            onBlur={ () => onLocationValueChange() }
          />
      </div>
  )
}

export default TextField
