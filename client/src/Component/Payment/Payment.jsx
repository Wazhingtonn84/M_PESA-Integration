import React, { useState } from "react";
import styles from "../Payment/Payment.module.css";
import Modal from "./Modal/Modal";

const Payment = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
        className={styles.payButton}
      >
        Pay Now
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default Payment;
