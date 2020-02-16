import React, { useState } from "react";
import { products as initialProducts } from "../utils/seed";
import App from "./app";

function AppContainer() {
  const [products, setProducts] = useState(initialProducts);

  const handleUpVote = productId => {
    const cloneProducts = [...products];
    cloneProducts[productId].vote++;
    setProducts(cloneProducts);
  };

  return <App products={products} handleUpVote={handleUpVote} />;
}

export default AppContainer;
