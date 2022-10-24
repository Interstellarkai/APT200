import React from "react";

import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "../Components/Essentials/Navbar";
import Footer from "../Components/Essentials/Footer";
import ProductDetail from "../Components/Product/ProductDetail";
import ProductCards from "../Components/Product/ProductCards";

import items from "../Data/items";

const Product = () => {
  const params = useParams();

  const productFilter = items.filter((item) => item.key === params.productId);

  const product = productFilter[0];

  return (
    <Container
      height="100vh"
      maxWidth={false}
      disableGutters
      border="solid black 1px"
      sx={{
        height: "100vh",
        overflow: { xs: "auto", md: "auto" },
      }}
    >
      <Navbar />
      <Box sx={{ marginTop: { xs: "10px", lg: "20px" } }}>
        <ProductDetail
          product={product}
          user={product.username}
        ></ProductDetail>
      </Box>

      <ProductCards products={items}></ProductCards>
      <Footer />
    </Container>
  );
};

export default Product;
