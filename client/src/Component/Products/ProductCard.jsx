import React, { useState } from "react";
import Axios from "axios";
import styles from "../Products/ProductCard.module.css";
import Payment from "../Payment/Payment.jsx";
import products from "../../data/products.json";

import { getImageUrl } from "../../utils.js";

const ProductCard = ({ product: { name, price, imageSrc } }) => {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={getImageUrl(imageSrc)}
          alt={`Image of ${name}`}
        />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price} value={price}>
          Kshs. {price}
        </p>
        <Payment />
      </div>
    </>
  );
};

export default ProductCard;
