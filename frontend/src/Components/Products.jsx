import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product";

const Products = ({ products }) => {
  if (!products.length) return <p>Loading...</p>;

  return (
    <main
      flexGrow="1"
      backgroundColor="theme.palette.background.default"
      padding="theme.spacing(3)"
    >
      {/* <div theme.mixins.toolbar />{" "} */}
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        spacing={4}
        xs={12}
        lg={11}
        sx={{}}
      >
        {products.map((product) => (
          <Grid key={product.key} item xs={12} sm={10} md={8} lg={6} sx={{}}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

// Export the Products component.
export default Products;
