import React from "react";

export default function product() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        className="image-container"
        style={{ width: "auto", marginRight: "5px" }}
      >
        <img
          className="ui top aligned tiny image"
          src="https://picsum.photos/seed/picsum/200"
          alt="product_img"
          style={{ maxHeight: "80px", objectFit: "fill" }}
        />
      </div>
      <div
        className="content-container"
        style={{ display: "flex", flexDirection: "column", width: "60%" }}
      >
        <span className="product-title">Product Title</span>
        <span className="product-short-desc">Product Short Description</span>
        <div
          className="author-section"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span className="autor-name">Author Name</span>
          <span className="autor-avatar" style={{ marginLeft: "5px" }}>
            <img
              class="ui medium circular image"
              style={{ height: "30px", width: "30px", borderRadius: "100%" }}
              src="https://placekitten.com/640/360"
              alt="avatar"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
