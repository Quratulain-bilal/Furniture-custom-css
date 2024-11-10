// pages/index.tsx
import React from "react";
import Header from "../app/Componenets/Header";
import Hero from "../app/Componenets/Hero";
import About from "../app/Componenets/About";
import Product from "../app/Componenets/Product";
import Discount from "../app/Componenets/Discount1";
import Discount2 from "../app/Componenets/Discount2";
import Gallery from "../app/Componenets/Gallery";
import Contact from "../app/Componenets/Contact";
import Footer from "../app/Componenets/Footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <About/>
      <Product/>
      <Discount/>
      <Discount2/>
      <Gallery/>
      <Contact/>
      <Footer/>
      
    </div>
  );
};

export default HomePage;
;