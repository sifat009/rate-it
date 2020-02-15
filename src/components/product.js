import React from "react";

export default function product() {
  return (
    <div style={{ display: "flex" }}>
      <div className="image-container">
        <img
          className="ui top aligned tiny image"
          style={{ height: "80px" }}
          src="https://picsum.photos/seed/picsum/200/200"
          alt="product_img"
        />
      </div>
      <div className="content-container">
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
              style={{ height: "50px", width: "50px", borderRadius: "100%" }}
              src="https://picsum.photos/id/237/200/300"
              alt="avatar"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
