import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./product/Product";

const products = [
  {
    id: 1,
    name: "Vase",
    description: "Fukagawa vase",
    price: "$5",
    image:
      "https://cdn0.rubylane.com/_pod/item/1117255/A1188/Japanese-Vintage-Arita-x7826x7823x78786DF1x783bx7826x7823x78785DDDx783b-Fukagawa-Porcelain-pic-1A-2048-54-f.jpg",
  },
  {
    id: 2,
    name: "Plate",
    description: "Fukagawa plate",
    price: "$10",
    image:
      "https://cdn0.rubylane.com/_pod/item/798792/4000005091/Japanese-Fukagawa-Porcelain-Plate-pic-1A-2048%3A10.10-853b7bab-f.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
