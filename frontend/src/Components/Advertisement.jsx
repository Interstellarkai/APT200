import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// Timer
import { useCountdown } from "./Countdown";

const Advertisement = ({ product }) => {
  const CountdownTimer = () => {
    const [days, hours, minutes, seconds] = useCountdown();

    if (days + hours + minutes + seconds <= 0) {
      return (
        <Typography gutterBottom variant="h6" color="#FFFFFF" align="center">
          Time's up!
        </Typography>
      );
    }
    return (
      <Grid
        container
        display={"flex"}
        direction="row"
        justifyContent="center"
        spacing="10"
        sx={{
          fontWeight: "bold",
          fontStyle: "Inter",
        }}
      >
        <Grid item>
          <Box
            backgroundColor="#FFFFFF"
            color="#505780"
            width="30px"
            sx={{ borderRadius: "10%" }}
          >
            <Typography align="center">
              {hours.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            backgroundColor="#FFFFFF"
            color="#505780"
            width="30px"
            sx={{ borderRadius: "10%" }}
          >
            <Typography align="center">
              {minutes.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            backgroundColor="#FFFFFF"
            color="#505780"
            width="30px"
            sx={{ borderRadius: "10%" }}
          >
            <Typography align="center">
              {seconds.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  };

  return (
    <Card
      sx={{
        borderRadius: "20px",
        minWidth: { xs: "150px", lg: "500px" },
        backgroundColor: "#252e69",
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            fontWeight: "bold",
            fontStyle: "Inter",
            color: "#FFFFFF",
          }}
        >
          <Typography gutterBottom variant="h5" align="center" color="#FFFFFF">
            {product.productName}
          </Typography>
          <Typography gutterBottom variant="h4" align="center" color="#FFFFFF">
            Best Offer
          </Typography>
        </CardContent>
        <Box
          sx={{
            margin: "auto",
            width: "60%",
          }}
        >
          <CardMedia
            component="img"
            paddingTop="56.25%" // 16:9
            title={product.productName}
            image={product.img}
            height="100%"
            width="100%"
            objectFit="contain"
            sx={{ borderRadius: "5%" }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" color="#FFFFFF" align="center">
            Time Left
          </Typography>
          <div className="countdown">
            <CountdownTimer />
          </div>
          <Box
            display={"flex"}
            backgroundColor="#4c6fff"
            justifyContent={"center"}
            sx={{ borderRadius: "10px", marginTop: { xs: "20px", lg: "20px" } }}
          >
            <Typography
              gutterBottom
              variant="h6"
              align="center"
              color="#FFFFFF"
              sx={{ fontWeight: "light" }}
            >
              Only ${product.price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Advertisement;
