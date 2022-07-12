import React from "react";
import "./styles/ProductCards.scss";
import { Link } from "react-router-dom";

const ProductCards = ({ categoryItems }) => {
  return (
    <div className="products">
      {categoryItems.map((item, index) => {
        return (
          <div key={index} className="card py-3 mb-4 mx-3">
            <div className="imgBox">
              <img src={item.image} className="card-img-top" alt={item.title} />
            </div>
            <div className="card-body">
              <p>{item.title.substring(0, 12)}--</p>
              <p>{item.category}</p>
              <p>{item.price} $</p>
              <p>
                <span>{item.count}</span> people rated this product
                <span>{item.rate}</span>
              </p>
            </div>
            <div className="card-footer">
              <Link to={`/${item.id}`}>
                <button className="btn btn-block w-100">Buy Now</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
