import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const CarouselCard = ({ user, item }) => {
  const [expanded, setExpanded] = useState(false);
  const [fav, setFav] = useState(false);
  const theme = useTheme();
  // console.log(item.img);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavClick = () => {
    setFav(!fav);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: theme.palette.primary.main }}
            aria-label="username"
          >
            {user.username.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleFavClick}>
            <FavoriteIcon sx={{ color: `${fav ? "red" : "none"}` }} />
          </IconButton>
        }
        title={user.username}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={item.img}
        alt="ItemImage"
        sx={{
          objectFit: "contain",
          bgcolor: "#dffaff",
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>{item.productName}</Typography>
        <Typography>${item.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default CarouselCard;
