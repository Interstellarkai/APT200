import * as React from "react";

import { useSelector } from "react-redux";
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

import { useState } from "react";
import colors from "../colors";

import MerchantDiceLogoName from "../../Assets/logo-with-name.svg";
import RegisterPopup from "../RegisterPopup";
import { useDispatch } from "react-redux";
import { toggleLoggedIn } from "../../Redux/userSlice";
import PAGES from "../../pageRoute";

const pages = ["Women", "Men", "Shirts", "Pants", "Shoes"];
const mobilePages = [
  "Sign in",
  "Register",
  "Women",
  "Men",
  "Shirts",
  "Pants",
  "Shoes",
];

const settings = ["Profile", "Dashboard", "Logout"];
const emails = ["username@gmail.com", "user02@gmail.com"];
let [a, b, ...mobilePages2] = mobilePages;
mobilePages2 = settings.concat(mobilePages2);

const Navbar = () => {
  // useStates
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  // Redux
  const curUser = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (setting) => {
    if (setting === "Logout") {
      dispatch(toggleLoggedIn());
    } else if (setting === "Dashboard") {
      navigate(PAGES.manageProductsPage);
    } else if (setting === "Sign in") {
      navigate(PAGES.loginPage);
    } else {
      handleGoCatalogue();
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    if (setting === "Logout") {
      dispatch(toggleLoggedIn());
    } else if (setting === "Dashboard") {
      navigate(PAGES.manageProductsPage);
    }
    setAnchorElUser(null);
  };

  // RegisterPopup Handlers
  const handleRegisterClick = () => {
    setRegisterOpen(true);
  };

  const handleRegisterClose = (value) => {
    setRegisterOpen(false);
    setSelectedValue(value);
  };

  // route upon click
  const handleGoHome = () => {
    navigate(PAGES.homePage);
  };

  const handleGoLogin = () => {
    navigate(PAGES.loginPage);
  };

  const handleGoCatalogue = () => {
    navigate(PAGES.catalogue);
  };

  console.log("Cur user: ", curUser);

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        fontSize: "17px",
        // border: "solid black 1px",
        padding: { xs: "0", md: "0 10px" },
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
              {curUser.isLoggedIn
                ? mobilePages2.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={() => handleCloseUserMenu(page)}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))
                : mobilePages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={
                        page === "Register"
                          ? handleRegisterClick
                          : () => {
                              handleCloseNavMenu(page);
                            }
                      }
                    >
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
                onClick={() => {
                  handleCloseNavMenu();
                  handleGoCatalogue();
                }}
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

          {curUser.isLoggedIn ? (
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={curUser.username}
                    src="/static/images/avatar/2.jpg"
                  />
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
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
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
                onClick={handleGoLogin}
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
                onClick={handleRegisterClick}
              >
                Register now!
              </Button>
              <RegisterPopup
                open={registerOpen}
                onClose={handleRegisterClose}
                selectedValue={selectedValue}
                values={emails}
              />
            </Box>
          )}
        </Box>
      </Box>
    </AppBar>
  );
};
export default Navbar;
