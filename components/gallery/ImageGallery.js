import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getPhotos } from '../../datas/photos.js';


import styles from '../../styles/components/ui/ImageGallery.module.css';


const ImageGallery = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        var p = getPhotos()
        setPhotos(p)
    }, [])

    return (
        <div className={styles.image_container} >
            { photos.map( photo => {
            
            return (
                <div className={styles.image_wrapper}>

                    <img
                        src={photo.image_directory}
                        alt={photo.image_directory}
                    />

                    {/* <div>
                        <Image
                            id={photo.id}
                            src={photo.image_directory}
                            alt={photo.image_directory} 
                            width={photo.width}
                            height={photo.height}
                        />
                    </div> */}

                </div>
                    
                    
            )})}
        </div>
    )
}

export default ImageGallery