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
        <div className={styles.images_grid} >
            { photos.map( (photo, index) => {
                return (
                    <div
                        className={styles.image_wrapper}
                        key={index}
                        width={photo.width}
                        height={photo.height}
                    >
                        <div>
                            <Image
                                id={photo.id}
                                src={photo.image_directory}
                                alt={photo.image_directory} 
                                layout='responsive'
                                loading='lazy'
                                width={photo.width}
                                height={photo.height}
                            />
                        </div>
                    </div>
                )})}
        </div>
    )
}

export default ImageGallery