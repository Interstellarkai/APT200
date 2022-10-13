import * as React from "react";

import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import PAGES from "../../pageRoute";
import MerchantDiceLogoName from "../../Assets/logo-with-name.svg";
import Searchbar2 from "./Searchbar2";
import SelectCategory from "./SelectCategory";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Navbar2 = () => {
  const navigate = useNavigate();
  // route upon click
  const handleGoHome = () => {
    navigate(PAGES.homePage);
  };

  const handleGoLogin = () => {
    navigate(PAGES.loginPage);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        fontSize: "17px",
        // border: "solid black 1px",
        padding: { xs: "0", md: "10px 10px" },
        boxShadow: "none",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // bgcolor: "yellow",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              content: `url(${MerchantDiceLogoName})`,
              mr: 1,
              cursor: "pointer",
              // bgcolor: "red",
            }}
            alt="Logo"
            onClick={handleGoHome}
          />
          <Box
            sx={{
              mr: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <SelectCategory />
            <Searchbar2 />
          </Box>
          <Box
            component="button"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "#FFFFFF",
              border: "white",
              pr: "10px",
            }}
          >
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography sx={{ color: "#000000" }}>Wishlist</Typography>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};
export default Navbar2;
