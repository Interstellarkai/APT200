import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const FooterItem = ({ title, value, hasIcon }) => {
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
            <IconButton sx>{icon}</IconButton>
          ))}{" "}
        </Box>
      ) : (
        <Typography variant="subtitle1">{value}</Typography>
      )}
    </Box>
  );
};

export default FooterItem;
