import { alpha, styled } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",

  marginBottom: "50px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  width: "10%",
  //   position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   backgroundColor: "blue",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "100%",
  width: "50%",
  //   backgroundColor: "blue",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  //   "& ::placeholder": {
  //     textAlign: ${isActive ? "none" : "center"},
  //   },

  "& .MuiInputBase-input": {
    // backgroundColor: "red",
    color: theme.palette.secondary.main,
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "auto",

    "&:hover": {
      backgroundColor: " rgba(226, 224, 224, 0.199)",
      borderRadius: theme.shape.borderRadius,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },

    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "100%",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        paddingLeft: 10,
      },
    },
  },
}));

const Searchbar = () => {
  return (
    <Search>
      {/* <Box
        sx={{
          display: "flex",
          height: "30px",
          //   bgcolor: "green",
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      {/* <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper> */}
      <StyledInputBase
        startAdornment={<SearchIcon />}
        placeholder="Search… "
        inputProps={{ "aria-label": "search" }}
      />
      {/* </Box> */}
    </Search>
  );
};

export default Searchbar;
