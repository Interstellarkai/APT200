import { Grow, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Navbar from "../Components/Essentials/Navbar";
import colors from "../Components/colors";
import Divider from "../Components/Essentials/Divider";
import Searchbar from "../Components/Essentials/Searchbar";
import Carousel from "../Components/Carousel/Carousel";
import Footer from "../Components/Essentials/Footer";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Container
        sx={{
          width: "inherit",
          mt: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // bgcolor: "green",
        }}
      >
        <Box color="inherit" textAlign="center">
          <Grow in={true} timeout={1500}>
            <Typography variant="h1">
              Anything,{" "}
              <Typography variant="inheirt" color={colors.mainBlue}>
                everything
              </Typography>
              , all at once.
            </Typography>
          </Grow>
          <Box sx={{ my: "100px" }}>
            <Typography color={colors.mainGrey}>
              At MerchantDice, you’re sure to find what you’re looking for! The
              ultimate platform for buying & selling. <br />
              <br /> Try finding something!
            </Typography>
          </Box>
          <Searchbar />
        </Box>
        <Divider />
        <Container
          sx={{
            // border: "solid black",
            display: "flex",
            justifyContent: { md: "space-evenly" },
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Carousel />
          <Carousel />
        </Container>
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
