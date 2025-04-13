import React from "react";
import Functions from "./components/Functions";
import Pluses from "./components/Pluses";
import Details from "./components/Details";
import Requirements from "./components/Requirements";

const Product = () => {
  return (
    <div className="w-full bg-primary">
      <Functions />
      <Pluses />
      <div className="bg-stroke">
        <Details />
      </div>
      <Requirements />
    </div>
  );
};

export default Product;
