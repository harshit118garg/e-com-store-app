import React, { useState, useEffect } from "react";
import "./styles/Products.scss";
import axios from "axios";
import Loading from "./Loading";
import Category from "./Category";
import ProductCards from "./ProductCards";

const Products = () => {
  const [data, setData] = useState([]);
  const [categoryItems, setCategoryItems] = useState(data);
  const [loading, setLoading] = useState(false);

  function getProducts() {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((resp) => {
        setData(resp.data);
        setCategoryItems(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const ShowProducts = () => {
    const categoriesArray = [
      "men's clothing",
      "women's clothing",
      "jewelery",
      "electronics",
    ];
    return (
      <>
        <Category categoriesArray={categoriesArray} data={data} setCategoryItems={setCategoryItems} />
        <ProductCards categoryItems={categoryItems}/>
      </>
    );
  };

  return (
    <>
      <section>
        <div className="heading">
          <h1 className="text-center fw-bold fs-4 text-uppercase">
            Latest Products
          </h1>
        </div>
        <hr />
        {loading ? <Loading /> : <ShowProducts />}
      </section>
    </>
  );
};

export default Products;
