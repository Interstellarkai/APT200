import React from "react";

import { Container } from "@mui/material";

import Navbar from "../Essentials/Navbar";
import Footer from "../Essentials/Footer";
import ProductDetail from "../ProductDetail";
import ProductCards from "./ProductCards";

import items from "../../Data/items";

const Product = () => {
  console.log(items[0]);
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
      <ProductDetail
        product={items[0]}
        user={items[0].username}
      ></ProductDetail>
      <ProductCards products={items}></ProductCards>
      <Footer />
    </Container>
  );
};

export default Product;
