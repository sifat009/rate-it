import React from "react";

export default function rate({ voteNumber, productId, handleUpVote }) {
  return (
    <>
      <button
        className="ui grey basic button"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          marginRight: "5px"
        }}
        onClick={() => handleUpVote(productId)}
      >
        <i
          className="play icon"
          style={{ transform: "rotate(-90deg)", margin: "0 auto" }}
        ></i>
        <span className="rate-number">{voteNumber}</span>
      </button>
    </>
  );
}
