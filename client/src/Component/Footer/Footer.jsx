import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Footer.module.css";

const Contacts = () => {
  return (
    <footer id="contacts" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:wazhingtonn84@gmail.com">Email</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contacts;
