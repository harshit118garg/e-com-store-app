import "./App.scss";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
