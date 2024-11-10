import React from "react";
import styles from "../../../styles/Discount1.module.css"

const Discount1: React.FC = () => {
  return (
    <section id="Discounts" className={`${styles.section} relative`}>
      {/* Background Image */}
      <img
        src="https://img.freepik.com/free-photo/chair-modern-table-interior-indoor_1122-2074.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
        className={`${styles.backgroundImage} absolute top-0 left-0 w-full h-full object-cover opacity-80`}
      />

      <div className={`${styles.content} relative text-center z-10`}>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4  text-white">
          Special 30% Discount on Furniture for Those in Need.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white mb-6 px-4">
          To support those who need it most, we are offering an exclusive 30%
          discount on all our furniture for low-income families.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="buttonPrimary px-6 py-2 text-white rounded-lg transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discount1;
