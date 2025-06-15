import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(20)
        .fill(null)
        .map((res, index) => (
          <div className="shimmer-cards" key={index + 12}></div>
        ))}
    </div>
  );
};

export default Shimmer;
