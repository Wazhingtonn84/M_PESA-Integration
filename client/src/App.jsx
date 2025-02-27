import { useState } from "react";
import Payment from "./Component/Payment/Payment";
import Products from "./Component/Products/Products";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import About from "./Component/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Products />
      <About />
      <Footer />
    </>
  );
}

export default App;
