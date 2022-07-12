import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/SingleProduct.scss";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData = await res.json();
      setProduct(productData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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
            Rating {product?.rating?.rate}
            <i className="fa fa-star text-warning" />
          </span>
          <h1 className="display-5 fw-bold">{product.title}</h1>
          <p className="text-justify lead mt-3">{product.description}</p>
          <h4 className="display-5 fw-bold my-3">$ {product.price}</h4>
        </div>
        <Link to={`/${id}`}>
          <button className="btn btn-danger w-100">Buy Now</button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="container my-5 bg-primary bg-opacity-25 border rounded shadow p-5">
        <div className="itemDetails">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
