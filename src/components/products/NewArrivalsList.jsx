import React from "react";
import { commerce } from "../../lib/commerce";

import Product from "../product/Product";

const NewArrivalsList = ({ newArrivalsList }) => {
  commerce.categories.retrieve();
  return (
    <>
      {newArrivalsList.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
};

export default NewArrivalsList;
