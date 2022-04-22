import React, { useEffect, useState } from 'react'

//styles
import styles from '../../styles/components/ui/Select.module.css'

const Select = ({ value, name, id, onChange, options, icon, onLocationValueChange }) => {

    const [screenWidth, setscreenWidth] = useState(0)
 
    useEffect(() => {
        setscreenWidth(screen.width)

    }, [])

  return (
    <div className={styles.citySelect}>

        <span>
            {screenWidth > 428 ? icon : null }
        </span>

        <select
        
        value={value}
        name={name}
        id={id}
        onChange={ onChange }
        onBlur={ () => onLocationValueChange() }
        >
            {
                options.map( (option) => {
                    return (
                        <option
                            value={option.name}
                            key={option.id}
                        >
                            {option.name}
                        </option>
                    )
                })
            }
        </select>
    </div>
  )
}


export default Select