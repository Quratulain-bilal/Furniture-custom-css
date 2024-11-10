import React from "react";
import styles from "../../../styles/Discount.module.css";

const Discount2 = () => {
  const products = [
    {
      id: 1,
      category: "CATEGORY",
      title: "The Catalyzer",
      price: "$16.00",
      imageUrl:
        "https://img.freepik.com/free-photo/wall-old-historic-tables-romantic_1203-6338.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid",
    },
    {
      id: 2,
      category: "CATEGORY",
      title: "Shooting Stars",
      price: "$21.15",
      imageUrl: "/p1.png",
    },
    {
      id: 3,
      category: "CATEGORY",
      title: "Neptune",
      price: "$12.00",
      imageUrl: "/p2.png",
    },
    {
      id: 4,
      category: "CATEGORY",
      title: "The 400 Blows",
      price: "$18.40",
      imageUrl: "/p3.png",
    },
    
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Discounted Products</h2>

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

export default Discount2;
