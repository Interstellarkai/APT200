import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

import items from "../../Data/items";

const ProductCards = ({ products }) => {
  if (!products.length) return <p>Loading...</p>;

  return (
    // <main
    //   // flexGrow="1"
    //   backgroundColor="theme.palette.background.default"
    //   // padding="theme.spacing(3)"
    // >
    //   {/* <div theme.mixins.toolbar />{" "} */}
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      spacing={4}
      xs={12}
      lg={11}
      sx={{}}
    >
      {items.map((item) => (
        <Grid key={item.key} item xs={12} sm={10} md={8} lg={6} sx={{}}>
          <ProductCard item={item} />
        </Grid>
      ))}
    </Grid>
    // </main>
  );
};

// Export the Products component.
export default ProductCards;
