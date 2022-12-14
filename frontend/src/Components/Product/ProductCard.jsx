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
import ImageService from "../../Services/image";
import { useNavigate } from "react-router-dom";
import PAGES from "../../pageRoute";

import { getUser } from "../../Services/UserRequests";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createChat } from "../../Services/ChatRequests";
import { setChat } from "../../Redux/chatSlice";
import { getMessages } from "../../Services/MessageRequests";

const ProductCard = ({ item }) => {
  const curUser = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(item.descriptions.length);
  let mid = Math.ceil(item.descriptions.length / 2);
  if (mid > 3) {
    mid = 3;
  }
  // console.log(mid);
  let items = item.descriptions.slice(0, mid);
  const listing = items.map((description) => {
    return <li key={description.toString()}>{description}</li>;
  });

  const [fav, setFav] = useState(false);
  const [base64String, setBase64String] = useState(null);
  const theme = useTheme();
  const handleFavClick = () => {
    setFav(!fav);
  };

  const handleGoProduct = () => {
    navigate(PAGES.product + "/" + item.key);
    window.location.reload(false);
  };

  const handleGoChat = () => {
    // Create Chat
    const CreateChat = async () => {
      try {
        // console.log(curUser._id);
        // console.log(product.userId);
        let members = { senderId: curUser._id, receiverId: item.userId };
        let res = await createChat(members);
        let chat = res.data;
        // console.log("Chat: ", chat);
        // dispatch(setChat({ ...chat, messages: [] }));
        // console.log("Chat Created!");

        let seller_res = await getUser(item.userId);
        console.log(item.userId);
        let seller = seller_res.data;
        // console.log("Seller: ", seller);
        res = await getMessages(chat._id);
        let messages = res.data;
        console.log("Messages: ", messages);
        dispatch(setChat({ ...chat, messages }));
        navigate(PAGES.chat, { state: { seller, chat } });
      } catch (e) {
        console.log("Error!", e);
      }
    };
    CreateChat();
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
    if (item.img_id) {
      ImageService.getImageByID(item.img_id)
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
        minHeight: "400px",
        maxHeight: "400px",
        boxShadow: "0px 5px 5px #aaaaaa",
        borderRadius: "20px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: theme.palette.primary.main }}
            aria-label="username"
          >
            {item.username.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleFavClick}>
            <FavoriteIcon sx={{ color: `${fav ? "red" : "none"}` }} />
          </IconButton>
        }
        title={item.username}
        subheader="September 14, 2016"
      />
      <CardActionArea sx={{}}>
        <Box sx={{ m: "10px", mt: "0px" }}>
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
            <Fab
              size="small"
              color="white"
              aria-label="chat"
              onClick={handleGoChat}
            >
              <ChatIcon />
            </Fab>
          </Box>
          <Box onClick={handleGoProduct}>
            {" "}
            <CardMedia
              component="img"
              paddingtop="56.25%" // 16:9
              title={item.productName}
              src={
                base64String !== null
                  ? `data:image/png;base64,${base64String}`
                  : item.img
                  ? item.img
                  : require("../../Assets/Item/placeholder.png")
              }
              height="140"
              width="100%"
            />
          </Box>
        </Box>

        <CardContent onClick={handleGoProduct}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography gutterBottom inline variant="h5" component="div">
                {item.productName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom inline variant="h5" component="h2">
                ${item.price}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            {listing}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
