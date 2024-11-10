import React from "react";
import styles from "../../../styles/About.module.css";
import { FaTwitter, FaPhoneAlt } from 'react-icons/fa';
const HeroSection: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <div
        className={`${styles.container} container mx-auto flex px-5 py-24 md:flex-row flex-col items-center`}
      >
        <div
          className={`${styles.textContainer} lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center`}
        >
          <h1
            className={`${styles.title} title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900`}
          >
            About our Quality
          </h1>
          <p className={`${styles.description} mb-8 leading-relaxed`}>
            We believe that furniture is more than just functional – it’s an
            expression of style, craftsmanship, and comfort. Our passion lies in
            creating beautifully designed, high-quality pieces that transform
            spaces and make them truly feel like home. From timeless wooden
            tables to luxurious sofas, every piece is meticulously crafted by
            skilled artisans who take pride in their work. We focus on blending
            tradition with innovation, ensuring that each item not only adds
            elegance to your living space but also stands the test of time.
            Explore our collection and discover the perfect furniture to elevate
            your home, one piece at a time.
          </p>
          <button className="buttonPrimary mb-4">
            <a
              href="https://x.com/stelalvna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 justify-center"
            >
              <FaTwitter /> {/* Twitter Icon */}
              <span className="text-lg">Twitter</span> {/* Text */}
            </a>
          </button>

          {/* Contact Us Button */}
          <button className="buttonPrimary mb-4">
            <a
              href="#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 justify-center"
            >
              <FaTwitter /> {/* Twitter Icon */}
              <span className="text-lg">Contact us</span> {/* Text */}
            </a>
          </button>
        </div>
        <div
          className={`${styles.imageContainer} lg:max-w-lg lg:w-full md:w-1/2 w-5/6`}
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://img.freepik.com/free-photo/interior-design-with-armchair-potted-plant_23-2149427983.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
