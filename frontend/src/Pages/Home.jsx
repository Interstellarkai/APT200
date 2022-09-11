import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Navbar from "../Components/Navbar";
import colors from "../Components/colors";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container max-width="xl" sx={{ mt: "100px" }}>
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
      </Container>
    </div>
  );
};

export default Home;
