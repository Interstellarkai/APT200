import { Box } from "@mui/system";
import React from "react";
import GoogleMap from "./GoogleMap";

import "./Map.css";

const MapWrapper = ({ location }) => {
  return (
    <Box className="map-wrapper">
      <GoogleMap location={location} />
    </Box>
  );
};

export default MapWrapper;
