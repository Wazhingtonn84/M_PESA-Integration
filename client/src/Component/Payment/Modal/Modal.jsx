import React, { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [warning, setWarning] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const onChangePhone = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onChangeAmount = (event) => {
    const enteredAmount = event.target.value;
    if (!/^\d+$/.test(enteredAmount) || "") {
      setWarning("Only digits are allowed with no decimals.");
    } else {
      setWarning("");
      setAmount(enteredAmount);
    }
  };

  // const checkInputs = (phone, amt) => {
  //   if (phone && amt) {
  //     setWarning("");
  //     setShowNotification(false);
  //   } else {
  //     setWarning("Please enter both phone number and amount to continue.");
  //   }
  // };

  const payHandler = (event) => {
    event.preventDefault();
    if (!phoneNumber || !amount) {
      setNotificationMessage("Please enter both phone number and amount.");
      setShowNotification(true);
    } else {
      Axios.post("http://localhost:5000/token", { phoneNumber, amount })
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            closeModal(false);
            toast.success("Success Notification!", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000,
            });
          }, 2000);
          toast.success("Success Notification!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
        })
        .catch((error) => {
          console.log(error);
          setNotificationMessage("Unable to process the request.");
        });
    }
  };
  return (
    <>
      <div className="modalBackGround">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}>x</button>
          </div>
          <div className="title">
            <h2>Enter phone number and amount to continue..</h2>
          </div>
          <div className="phone">
            <input
              onChange={onChangePhone}
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              required
              placeholder="Phone Number"
            />
          </div>
          <div className="amount">
            <input
              onChange={onChangeAmount}
              type="text"
              name="amount"
              id="amount"
              required
              placeholder="Amount"
            />
            <br />
          </div>
          {warning && <p className="warning">{warning}</p>}

          <div className="footer">
            <button id="cancelBtn" onClick={() => closeModal(false)}>
              Cancel
            </button>
            <button id="continueBtn" onClick={payHandler}>
              Continue
            </button>
            <ToastContainer />
          </div>
          {showNotification && (
            <p className="notification">{notificationMessage}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
