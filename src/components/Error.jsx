import React from "react";

function Error({ error }) {
  return (
    <div className="error-container">
      <h3>Sorry! 😞</h3>
      <h4>{error}</h4>
      <p>Please try again later</p>
    </div>
  );
}

export default Error;
