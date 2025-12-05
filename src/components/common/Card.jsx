import React from "react";
import { Link } from "react-router-dom";

const Card = ({ sorted }) => {
  return (
    <>
      {sorted.map((product) => (
        <div className="card bg-base-200 w-96 shadow-sm" key={product.id}>
          <figure>
            <img src={product.images[0]} alt={product.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to={`/products/${product.id}`}>Buy Now</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
