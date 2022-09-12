import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const FooterItem = ({ title, value, hasIcon }) => {
  return (
    <Box>
      <Typography variant="subtitle2">{title}</Typography>
      {hasIcon ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {value.map((icon) => (
            <IconButton>{icon}</IconButton>
          ))}{" "}
        </Box>
      ) : (
        <Typography variant="subtitle1">{value}</Typography>
      )}
    </Box>
  );
};

export default FooterItem;
