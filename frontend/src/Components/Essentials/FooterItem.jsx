import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const FooterItem = ({ title, value, hasIcon }) => {
  // console.log("Value: ", value);
  return (
    <Box sx={{ my: 1 }}>
      <Typography variant="subtitle2">{title}</Typography>
      {hasIcon ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "none", md: "space-evenly" },
            // bgcolor: "blue",
          }}
        >
          {value.map((icon) => (
            <IconButton key={icon.props.name}>{icon}</IconButton>
          ))}{" "}
        </Box>
      ) : (
        <Typography variant="subtitle1">{value}</Typography>
      )}
    </Box>
  );
};

export default FooterItem;
