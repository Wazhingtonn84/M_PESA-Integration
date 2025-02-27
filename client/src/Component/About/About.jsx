import React from "react";
import styles from "../About/About.module.css";

const About = () => {
  return (
    <>
      <section className={styles.container} id="about">
        <h2>ABOUT US</h2>
        <p className={styles.description}>
          Here you will find all the books you need. We provide all the books
          that suit your needs and the payment is one click away and the
          delivery done to your doorstep. Welcome
        </p>
      </section>
    </>
  );
};

export default About;
