import React from "react";
import Rate from "./rate";
import Product from "./product";

export default function app() {
  return (
    <div>
      <div
        className="ui container single-product"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 15px",

          border: "1px solid #e3e3e3",

          boxShadow: "1px 1px 10px 0px #e3e3e3"
        }}
      >
        <Rate />
        <Product />
      </div>
    </div>
  );
}
