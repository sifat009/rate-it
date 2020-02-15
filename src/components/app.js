import React from "react";
import Rate from "./rate";
import Product from "./product";

export default function app() {
  return (
    <div className="ui container" style={{ display: "flex" }}>
      <Rate />
      <Product />
    </div>
  );
}
