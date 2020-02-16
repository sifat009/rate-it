import React from "react";

export default function product({ product }) {
  const renderProduct = product => {
    return (
      <div style={{ display: "flex", width: "100%" }}>
        <div
          className="image-container"
          style={{ width: "auto", marginRight: "5px" }}
        >
          <img
            className="ui top aligned tiny image"
            src={product.image}
            alt="product_img"
            style={{ maxHeight: "80px", objectFit: "fill" }}
          />
        </div>
        <div
          className="content-container"
          style={{ display: "flex", flexDirection: "column", width: "60%" }}
        >
          <span className="product-title">{product.name}</span>
          <span className="product-short-desc">{product.description}</span>
          <div
            className="author-section"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span className="autor-name">{product.authorName}</span>
            <span className="autor-avatar" style={{ marginLeft: "5px" }}>
              <img
                className="ui medium circular image"
                style={{ height: "30px", width: "30px", borderRadius: "100%" }}
                src={product.authorAvatar}
                alt="avatar"
              />
            </span>
          </div>
        </div>
      </div>
    );
  };
  return renderProduct(product);
}
