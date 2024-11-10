// src/app/component/HeroSection.tsx
import React from "react";
import styles from "../../../styles/Hero.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";


const HeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Background Image */}
      <img
        src="background-img.png"
        alt="Background"
        className={styles.backgroundImage}
      />

      {/* Content Overlay */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Transform Your Space with Timeless Furniture
        </h1>
        <p className={styles.description}>
          Each piece in our collection is crafted with the utmost care, using
          the finest materials and expert craftsmanship to ensure durability and
          elegance. Our furniture is designed to stand the test of time,
          combining timeless beauty with modern functionality.
        </p>
        <div>
          {/* Facebook Button */}
          <button className={styles.buttonPrimary}>
            <a
              href="https://www.facebook.com/profile.php?id=61565211897828"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <FaFacebook /> {/* Icon */}
              <span>Facebook</span> {/* Text */}
            </a>
          </button>

          <button className={styles.buttonSecondary}>
            <a
              href="https://www.instagram.com/muhammadsalah9544/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <FaInstagram /> {/* Icon */}
              <span>Instagram</span> {/* Text */}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
