import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";

const ProductCards = ({ products }) => {
  if (!products.length) return <p>Loading...</p>;

  let shuffledProducts = products
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  let mid = Math.floor(shuffledProducts.length / 2);
  let productsDisplay = shuffledProducts.slice(0, mid);

  // console.log(productsDisplay);

  return (
    // <main
    //   // flexGrow="1"
    //   backgroundColor="theme.palette.background.default"
    //   // padding="theme.spacing(3)"
    // >
    //   {/* <div theme.mixins.toolbar />{" "} */}
    <Grid
      container
      item
      display={"flex"}
      justifyContent={"center"}
      spacing={4}
      xs={12}
      lg={12}
      sx={{
        marginBottom: { xs: "20px", lg: "40px" },
        marginTop: { xs: "5px", lg: "0px" },
      }}
    >
      {productsDisplay.map((item) => (
        <Grid key={item.key} item xs={12} sm={10} md={4} lg={3} sx={{}}>
          <ProductCard item={item} />
        </Grid>
      ))}
    </Grid>
    // </main>
  );
};

// Export the Products component.
export default ProductCards;
