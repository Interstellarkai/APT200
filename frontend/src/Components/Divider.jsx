import { Container } from "@mui/system";
import React from "react";
import colors from "./colors";

const Divider = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        // width: "inherit",
        bgcolor: "#F1EDED",
        height: "5px",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        margin: "20px",
      }}
    />
  );
};

export default Divider;
