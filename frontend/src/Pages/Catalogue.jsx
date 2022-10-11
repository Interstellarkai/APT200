import React from "react";

import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";
import Navbar2 from "../Components/Catalogue/Navbar2";
import Footer from "../Components/Essentials/Footer";

const typographyStyling_1 = {
  //   borderRadius: 2,
  //   border: "5px solid",
  //   borderColor: "secondary.main",
  fontSize: 24,
  fontWeight: "bold",
  paddingLeft: 2,
  display: { xs: "flex", md: "flex" },
  textAlign: { xs: "center", md: "none" },
  //   maxWidth: 500,
};

const typographyStyling_2 = {
  //   borderRadius: 2,
  //   border: "5px solid",
  //   borderColor: "secondary.main",
  fontSize: 20,
  fontWeight: "bold",
  paddingLeft: 2,
  display: { xs: "flex", md: "flex" },
  textAlign: { xs: "center", md: "none" },
  //   maxWidth: 500,
};

const BoxStyling = {
  marginTop: 4,
  marginLeft: { xs: "none", md: 8 },
  display: { xs: "flex", md: "flex" },
  flexDirection: { xs: "column", md: "column" },
  justifyContent: { xs: "center", md: "center" },
  //   border: "solid black 1px",
};

const Catalogue = () => {
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
      <Navbar2 />
      <main>
        <Box maxWidth="false" sx={{ ...BoxStyling }}>
          <Typography
            variant="h4"
            align="left"
            color="textPrimary"
            gutterBottom
            sx={{ ...typographyStyling_1 }}
          >
            100,000+ Buy New or Used Laptops & Desktop computer Online |
            MerchantDice
          </Typography>
          <Typography
            varaint="h5"
            align="left"
            gutterBottom
            sx={{ ...typographyStyling_2 }}
          >
            Looking for second hand or used laptops and desktop computers in
            Singapore? Browse great deals on MerchantDice and find your new
            computer!
          </Typography>
        </Box>
      </main>
      <Footer />
    </Container>
  );
};

export default Catalogue;
