import React from "react";
import styles from "../../../styles/Gallery.module.css";

const Gallery = () => {
  return (
    <section id="gallery" className={styles.textGray600}>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={styles.heading}>Our Gallery</h2>

          {/* Gallery Grid */}
          <div className={styles.galleryGrid}>
            {/* Image 1 (spans 2 rows and 2 columns) */}
            <div className={styles.imageContainer}>
              <img
                alt="gallery"
                className={styles.image}
                src="https://img.freepik.com/premium-photo/modern-living-room-interior-design-with-green-sofa-three-rectangular-mirrors_115919-80430.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
              />
            </div>

            {/* Image 2 */}
            <div className={styles.imageContainer}>
              <img
                alt="gallery"
                className={styles.image}
                src="https://img.freepik.com/free-photo/interior-design-house-modern-wooden-table-chair_657883-324.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
              />
            </div>

            {/* Image 3 */}
            <div className={styles.imageContainer}>
              <img
                alt="gallery"
                className={styles.image}
                src="https://img.freepik.com/premium-photo/stylish-concept-living-room-interior-with-small-walnut-table-design-chairs-tropical-leaf-beige-vase-retro-carpet-decoration-elegant-personal-accessories-modern-vintage-home-decor_431307-1119.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
              />
            </div>

            {/* Image 4 */}
            <div className={styles.imageContainer}>
              <img
                alt="gallery"
                className={styles.image}
                src="https://img.freepik.com/premium-photo/modern-interior-living-room-with-design-armchair-wooden-vintage-commode-wood-paneling-with-shelf-lot-plants-coffee-table-grey-wall-persnoal-accessories-home-decor_431307-1151.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
              />
            </div>

            {/* Image 5 */}
            <div className={styles.imageContainer}>
              <img
                alt="gallery"
                className={styles.image}
                src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129803.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
              />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
