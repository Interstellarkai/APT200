import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Navbar from "../Components/Navbar";
import colors from "../Components/colors";
import Divider from "../Components/Divider";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Container
        sx={{
          width: "100%",
          mt: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // bgcolor: "green",
        }}
      >
        <Box color="inherit" textAlign="center">
          <Typography variant="h1">
            Anything,{" "}
            <Typography variant="inheirt" color={colors.mainBlue}>
              everything
            </Typography>
            , all at once.
          </Typography>
          <Box sx={{ my: "100px" }}>
            <Typography color={colors.mainGrey}>
              At MerchantDice, you’re sure to find what you’re looking for! The
              ultimate platform for buying & selling. <br />
              <br /> Try finding something!
            </Typography>
          </Box>
        </Box>
        <Divider />
      </Container>
    </Container>
  );
};

export default Home;
