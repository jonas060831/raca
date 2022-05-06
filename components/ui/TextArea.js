import React from 'react'

//styles
import styles from '../../styles/components/ui/TextArea.module.css'

const TextArea = ({ name, id, value, setValue }) => {
  return (
    <div>
        <span style={{ float: 'right', marginRight: '3rem'}} >remaining character: { 1000 - value.length}</span>
        <textarea
          className={styles.textarea}
          name={name}
          id={id}
          value={value}
          cols="40"
          rows="20"
          maxLength={1000}
          onChange={ e => setValue(e.target.value) }
        >
        </textarea>
    </div>
  )
}

export default TextArea