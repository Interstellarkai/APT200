import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";

import colors from "./colors";

// import MerchantDiceLogoName from "./MerchantDiceLogoName";
// import MerchantDiceLogo from "./MerchantDiceLogo";

import MerchantDiceLogo from "../Assets/logo.svg";
import MerchantDiceLogoName from "../Assets/logo-with-name.svg";
import { Divider } from "@mui/material";

const pages = ["Women", "Men", "Shirts", "Pants", "Shoes"];
const mobilePages = [
  "Women",
  "Men",
  "Shirts",
  "Pants",
  "Shoes",
  "Sign in",
  "Register",
];
const settings = ["Profile", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
        fontSize: "17px",
      }}
    >
      <Container maxWidth="xl">
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
          />
          <Box
            sx={{
              display: { md: "none" },
              // bgcolor: "green",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="default"
              sx={{ color: `${colors.mainGrey}` }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {mobilePages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,

              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              alignItems: "center",
              // width: "20%",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: `${colors.mainGrey}`,
                  display: "block",
                  fontSize: "inherit",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {loggedIn ? (
            <Box sx={{ flexGrow: 1 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 0,
                color: `${colors.mainGrey}`,
                justifyContent: "right",
                fontSize: "inherit",
              }}
            >
              <Button
                className="MuiButton-root"
                sx={{ color: "inherit", fontSize: "inherit" }}
              >
                Sign in
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  bgcolor: `${colors.mainBlue}`,
                  mx: "20px",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontSize: "inherit",
                }}
              >
                Register now!
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
