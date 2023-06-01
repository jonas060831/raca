import ImageGallery from "../../components/gallery/ImageGallery";
import HeadSEO from "../../components/seo/HeadSEO"

import styles from '../../styles/Gallery.module.css';



const Gallery = () => {

    return (
        <div>
            <HeadSEO
                TabTitle="Gallery"
                title="Iwata Air Cooler for rent Gallery Page"
                description="Check out these pictures from our happy customers."
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