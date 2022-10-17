import React, { useEffect } from "react";
// Chat Icon
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import ChatIcon from "@mui/icons-material/Chat";
// End of Chat Icon
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled, useTheme } from "@mui/material/styles";
import ImageService from "../Services/image";
const Product = ({ product }) => {
  const [fav, setFav] = useState(false);
  const [base64String, setBase64String] = useState(null);
  const theme = useTheme();
  const handleFavClick = () => {
    setFav(!fav);
  };

  useEffect(() => {
    const getBase64 = (buffer) => {
      const to_return = btoa(
        new Uint8Array(buffer).reduce(function (data, byte) {
          return data + String.fromCharCode(byte);
        }, "")
      );
      return to_return;
    };
    if (product.img_id) {
      ImageService.getImageByID(product.img_id)
        .then((res) => {
          // Convert to base64
          setBase64String(getBase64(res.img.data.data));
        })
        .catch((e) => {
          console.log("Error geting image by id.");
          setBase64String(null);
        });
    }
  });

  return (
    <Card
      sx={{
        maxWidth: "100%",
        minHeight: "300px",
        boxShadow: "0px 5px 5px #aaaaaa",
        borderRadius: "20px",
      }}
    >
      <CardActionArea sx={{}}>
        <Box sx={{ m: "10px", mt: "20px" }}>
          <Box
            sx={{
              position: "absolute",
              zIndex: 2000,
              display: "flex",
              width: "100%",
              justifyContent: "right",
              paddingTop: { xs: "8px", lg: "10px" },
              paddingRight: { xs: "20px", lg: "30px" },
            }}
          >
            <Fab size="small" color="white" aria-label="chat">
              <ChatIcon />
            </Fab>
          </Box>
          <CardMedia
            component="img"
            paddingTop="56.25%" // 16:9
            title={product.productName}
            src={
              base64String !== null
                ? `data:image/png;base64,${base64String}`
                : product.img
                ? product.img
                : require("../Assets/Item/placeholder.png")
            }
            height="140"
            width="100%"
            objectFit="contain"
          />
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
