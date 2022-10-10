import React from "react";
// Chat Icon
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import ChatIcon from "@mui/icons-material/Chat";
// End of Chat Icon
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          paddingTop="56.25%" // 16:9
          title={product.productName}
          image={product.img}
          height="140"
          width="100%"
          objectFit="contain"
        ></CardMedia>
        <Box sx={{ position: "fixed", top: 5, right: 5, zIndex: 2000 }}>
          <Fab size="small" color="white" aria-label="chat">
            <ChatIcon />
          </Fab>
        </Box>
        <CardContent>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography gutterBottom inline variant="h5" component="div">
                {product.productName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom inline variant="h5" component="h2">
                ${product.price}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
