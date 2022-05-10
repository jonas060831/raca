import reactDom from "react-dom"
import { useState, useEffect } from 'react'
import styles from "../../styles/components/modals/modal1.module.css";
import { X } from "react-feather";


const BasicModal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    document.body.style.overflow = "scroll"
    onClose();
  };


  const modalContent = show ? (

    <div style={{ top: window.pageYOffset -1 }} className={styles.overlay} onClick={handleCloseClick}>
        <div
            className={styles.modal}
            onClick={ e => e.stopPropagation() }
        >
            <div className={styles.modalHeader} >
                <a href="#" onClick={handleCloseClick}>
                <X/>
                </a>
            </div>
            {title && <div className={styles.modalTitle}>{title}</div>}
            <div className={styles.modalBody}>
                    {children}
            </div>

        </div>
    </div>
  ) : null;


  if (isBrowser) {
    
    return reactDom.createPortal((
        modalContent
    ), document.getElementById('modal'))

  } else {
      return null
  }
}

export default BasicModal