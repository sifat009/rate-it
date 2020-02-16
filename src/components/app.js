import React from "react";
import Rate from "./rate";
import Product from "./product";

export default function app({ products, handleUpVote }) {
  const renderProduct = (product, index) => {
    return (
      <div
        className="ui container single-product"
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 15px",
          border: "1px solid #e3e3e3",
          boxShadow: "1px 1px 10px 0px #e3e3e3"
        }}
      >
        <Rate
          voteNumber={product.vote}
          productId={index}
          handleUpVote={handleUpVote}
        />
        <Product product={product} />
      </div>
    );
  };
  return (
    <div className="app">
      {products.map((product, index) => renderProduct(product, index))}
    </div>
  );
}
