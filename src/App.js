import React from "react";
import "./Scss/App.scss";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App ">
      <Header />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
