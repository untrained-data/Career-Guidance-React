import React from "react";
import img from "../../assets/illustration1.svg";
export const ProductDescription = () => {
  return (
    <>
      <div className="container">
        <div className="flex padding-top">
          <div className="row">
            <img src={img} alt="vector illustration" />
          </div>
          <div>
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </>
  );
};
