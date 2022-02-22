import BazarCard from "../BazarCard";
import NewArrival from "../icons/NewArrival";
import newArrivalsList from "../NewArrivalsList";
import { Grid } from "@mui/material";
import React from "react";
import CategorySectionCreator from "../CategorySectionCreator";
import ProductCard2 from "../product-cards/ProductCard2";

const Section5 = ({ newArrivalsList }) => {
  return (
    <CategorySectionCreator
      icon={<NewArrival />}
      title="New Arrivals"
      seeMoreLink="#"
    >
      <BazarCard
        sx={{
          p: "1rem",
        }}
      >
        <Grid container spacing={3}>
          {newArrivalsList.map((item) => (
            <Grid item lg={2} md={3} sm={4} xs={6} key={item.title}>
              <ProductCard2 {...item} />
            </Grid>
          ))}
        </Grid>
      </BazarCard>
    </CategorySectionCreator>
  );
};

export default Section5;
