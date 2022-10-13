import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ErrorMessage = ({ errorMessage }) => {
  return (
    // <Box
    // //   border="1px solid black"

    //   bgcolor="pink"
    //   textAlign={"center"}
    // >
    <Typography
      // margin={"0 5px"}
      padding={"5px"}
      textAlign="center"
      sx={{ fontSize: "14px", color: "red", bgcolor: "pink", width: "inherit" }}
    >
      <ErrorOutlineIcon /> {errorMessage}
    </Typography>
    // </Box>
  );
};

export default ErrorMessage;
