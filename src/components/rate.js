import React from "react";

export default function rate() {
  return (
    <div>
      <button
        className="ui button"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center"
        }}
      >
        <i
          className="play icon"
          style={{ transform: "rotate(-90deg)", margin: "0 auto" }}
        ></i>
        <span className="rate-number">100</span>
      </button>
    </div>
  );
}
