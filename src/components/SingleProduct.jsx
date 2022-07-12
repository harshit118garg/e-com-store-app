import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles/SingleProduct.scss";
import Loading from "./Loading";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  function getProduct() {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        setProduct(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="shadow" />
        </div>
        <div className="col-md-6">
          <h4 className="categoryPill">{product.category}</h4>
          <span className="lead">
            Rating {product.rating.rate}
            <i className="fa fa-star text-warning" />
          </span>
          <h1 className="display-5 fw-bold">{product.title}</h1>
          <p className="text-justify lead mt-3">{product.description}</p>
          <h4 className="display-5 fw-bold my-3">$ {product.price}</h4>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container my-5 bg-primary bg-opacity-25 border rounded shadow p-5">
        <div className="itemDetails">
          {loading ? <Loading /> : <ShowProduct />}{" "}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
