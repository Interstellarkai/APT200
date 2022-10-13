import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Map.css";
import { GOOGLE_API_URL } from "../../../base";

const GoogleMap = ({ location }) => {
  const MyCustomMarker = () => (
    <div>
      <LocationOnIcon sx={{ color: "red", fontSize: "30px" }} />
    </div>
  );

  const [loc, setLoc] = useState([1.3644, 103.9915]);

  useEffect(() => {
    if (location !== null) {
      setLoc([location.lat, location.lng]);
    }
    // console.log(loc);
  }, [location]);
  return (
    <div
      className="user-map custom-map"
      //   style={{ height: "200px", width: "400px" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_URL }} // My Google API is stored in the .env file in front-end
        // defaultCenter={defaultCenter}
        center={loc}
        defaultZoom={17}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <MyCustomMarker lat={loc[0]} lng={loc[1]} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
