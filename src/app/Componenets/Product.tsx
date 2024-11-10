// ProductGrid.tsx

import React from "react";
import styles from "../../../styles/Product.module.css";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      category: "CATEGORY",
      title: "The couchh",
      price: "$26.00",
      imageUrl:
        "p12.png",
    },
    {
      id: 2,
      category: "CATEGORY",
      title: "Comfort Stars",
      price: "$21.15",
      imageUrl: "/p11.png",
    },
    {
      id: 3,
      category: "CATEGORY",
      title: "Galaxy",
      price: "$12.00",
      imageUrl: "/p10.png",
    },
    {
      id: 4,
      category: "CATEGORY",
      title: "The  Blows",
      price: "$18.40",
      imageUrl: "/p9.png",
    },
    {
      id: 5,
      category: "CATEGORY",
      title: "The yellow chair",
      price: "$16.00",
      imageUrl: "/p8.png",
    },
    {
      id: 6,
      category: "CATEGORY",
      title: "Shiny Chair",
      price: "$21.15",
      imageUrl: "/p7.png",
    },
    {
      id: 7,
      category: "CATEGORY",
      title: "White Glaxy",
      price: "$42.00",
      imageUrl: "/p6.png",
    },
    {
      id: 8,
      category: "CATEGORY",
      title: "The white chair",
      price: "$18.40",
      imageUrl: "/p5.png",
    },
  ];

  return (
    <section id="products" className="text-gray-600 body-font">
      <div className={styles.container}>

    
        <h2 className={styles.heading}>Our Products</h2>



        <div className={styles.gridContainer}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  alt={product.title}
                  className={styles.image}
                  src={product.imageUrl}
                />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.category}>{product.category}</h3>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.price}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
