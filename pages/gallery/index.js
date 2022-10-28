import ImageGallery from "../../components/gallery/ImageGallery";
import HeadSEO from "../../components/seo/HeadSEO"

import styles from '../../styles/Gallery.module.css';



const Gallery = () => {

    return (
        <div>
            <HeadSEO
                TabTitle="Gallery"
                title="Iwata Air Cooler for rent"
                description="Air Cooler"
            />
            
            <main>
                <div className={styles.container}>
                
                <section className="imageandvideosclass">

                    <ImageGallery />

                </section>

                </div>
            </main>
        </div>
    )

}

export default Gallery