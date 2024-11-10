// src/app/component/HeroSection.tsx
import React from "react";
import styles from "../../../styles/Discount1.module.css";

const Discount1: React.FC = () => {
  return (
    <section id="Discounts" className={styles.section}>
      {/* Background Image */}
      <img
        src="https://img.freepik.com/premium-photo/designer-chairs-round-black-glass-table-with-comfy-sofa_993236-102347.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
        alt="Background"
        className={styles.backgroundImage}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Special 30% Discount on Furniture for Those in Need.
        </h1>
        <p className={styles.description}>
          We understand the importance of having a comfortable and
          well-furnished home, and we want to make that more accessible for
          everyone. To support those who need it most, we are offering an
          exclusive 30% discount on all our furniture for low-income families.
        </p>
      </div>
    </section>
  );
};

export default Discount1;
