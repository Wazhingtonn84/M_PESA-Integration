import React, { useState } from "react";
import { getImageUrl } from "../../utils.js";
import styles from "../Products/Product.module.css";
import products from "../../data/products.json";

import Payment from "../Payment/Payment.jsx";
import ProductCard from "./ProductCard.jsx";

const Products = () => {
  return (
    <section className={styles.container} id="products">
      <h2 className={styles.title}>PRODUCTS</h2>
      <div className={styles.products}>
        {products.map((product, id) => {
          return (
            <>
              <ProductCard key={id} product={product} />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
