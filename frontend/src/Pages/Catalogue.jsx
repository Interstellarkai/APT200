import React from "react";

import { Container, Box, bgcolor } from "@mui/system";
import { Typography } from "@mui/material";
import Navbar from "../Components/Essentials/Navbar";
import Navbar2 from "../Components/Catalogue/Navbar2";
import Footer from "../Components/Essentials/Footer";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Advertisement from "../Components/Advertisement";
import Products from "../Components/Catalogue/Products";
// import items from "../Data/items";
import users from "../Data/users";
import { FormControl, InputLabel, Select } from "@mui/material";
import Selectbuttons from "../Components/Catalogue/Selectbuttons";
import { useSelector } from "react-redux";

const option1 = {
  title: "All",
  options: ["Men", "Women", "Wearable", "Shoes"],
};

const option2 = {
  title: "Sort: Best Match",
  options: ["Option1", "Option2"],
};

const option3 = {
  title: "Condition",
  options: ["Option1", "Option2"],
};

const option4 = {
  title: "Price",
  options: ["Option1", "Option2"],
};

const typographyStyling_1 = {
  //   borderRadius: 2,
  //   border: "5px solid",
  //   borderColor: "secondary.main",
  fontSize: 22,
  fontWeight: "bold",
  display: { xs: "flex", md: "flex" },
  textAlign: { xs: "center", md: "none" },
  //   maxWidth: 500,
};

const typographyStyling_2 = {
  //   borderRadius: 2,
  //   border: "5px solid",
  //   borderColor: "secondary.main",
  fontSize: 16,
  fontWeight: "bold",
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
  // Redux
  const itemsSlice = useSelector((state) => state.tmpProducts.value);
  const items = [...itemsSlice.products];

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
      <Navbar></Navbar>
      {/* <Navbar2 /> */}
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
        <Grid
          container
          marginTop={{ xs: "10px", lg: "30px" }}
          marginBottom={{ xs: "10px", lg: "40px" }}
        >
          <Grid
            item
            spacing={3}
            xs={12}
            lg={9}
            display={"flex"}
            flexDirection={{ xs: "column", lg: "row" }}
            justifyContent={{ xs: "center", lg: "space-between" }}
            paddingLeft={{ xs: "25px", lg: "150px" }}
            paddingRight={{ xs: "25px", lg: "0px" }}
            sx={{}}
          >
            <Box sx={{ marginTop: { xs: "10px", lg: "0px" } }}>
              <Selectbuttons filters={option1} />
            </Box>
            <Box sx={{ marginTop: { xs: "10px", lg: "0px" } }}>
              <Selectbuttons filters={option2} />
            </Box>
            <Box sx={{ marginTop: { xs: "10px", lg: "0px" } }}>
              <Selectbuttons filters={option3} />
            </Box>
            <Box sx={{ marginTop: { xs: "10px", lg: "0px" } }}>
              <Selectbuttons filters={option4} />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={4}
            sx={{
              marginBottom: 2,
              // bgcolor: "red",
            }}
          >
            <Grid
              item
              xs={0}
              lg={5}
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: { xs: "column", md: "column" },
                alignItems: { xs: "center", md: "center" },
              }}
            >
              <Advertisement product={items[0]} />
              {/* temp solution */}
              <br />
              <br />
              <Advertisement product={items[1]} />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: { xs: "column", md: "column" },
                alignItems: { xs: "center", md: "center" },
                marginTop: { xs: "25px", md: "0px" },
              }}
            >
              <Advertisement product={items[0]} />
            </Grid>
            <Grid
              item
              spacing={4}
              xs={12}
              lg={7}
              sx={{
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  // bgcolor: "yellow",
                  display: { xs: "flex" },
                  flexDirection: { xs: "column" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Products products={items}></Products>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </main>
      <Footer />
    </Container>
  );
};

export default Catalogue;
