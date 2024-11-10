import React from "react";
import styles from "../../../styles/Footer.module.css"; 

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} text-gray-600 body-font`}>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    
          
          <img
            src="https://img.freepik.com/premium-photo/hd-digital-art-wallpaper-background_783884-205214.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid"
            alt="Furniture Logo"
            className="w-30 h-20 text-white p-2 rounded-full"
          />
          <span className="ml-3 text-4xl font-bold">Furniture</span>
      
      </div>
    </footer>
  );
};

export default Footer;
