// Get current user location
import { Button } from "antd";
import React from "react";
import { GOOGLE_API_URL } from "../../../base";

const LocationGetter = ({ passbackFunc }) => {
  // If browser supports navigator.geolocation, generate Lat/Long else let user know there is an error
  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, posError); // Passing in a success callback and an error callback fn
    } else {
      alert("Sorry, Geolocation is not supported by this browser."); // Alert is browser does not support geolocation
    }
  };
  // Geolocation error callback fn. Query permissions to check if the error occured due to user not allowing location to be shared
  const posError = () => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((res) => {
        if (res.state === "denied") {
          alert(
            "Enable location permissions for this website in your browser settings."
          );
        }
      });
    } else {
      alert(
        "Unable to access your location. You can continue by submitting location manually."
      ); // Obtaining Lat/long from address necessary
    }
  };
  // Geolocation success callback fn
  const showPosition = (position) => {
    let lat = position.coords.latitude; // You have obtained latitude coordinate!
    let long = position.coords.longitude; // You have obtained longitude coordinate!
    //   props.set_lat(lat); // Using dispatch to modify lat store state
    //   props.set_long(long); // Using dispatch to modify long store state
    convertToAddress(lat, long); // Will convert lat/long to City, State, & Zip code
  };
  // Fetching for google API key from back-end (Optional, you can store it in .env file in front-end)
  const convertToAddress = (lat, long) => {
    getAddress(lat, long);
  };
  // Converting lat/long from browser geolocation into city, state, and zip code using Google Geocoding API
  const getAddress = (lat, long) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API_URL}`
    )
      .then((res) => res.json())
      .then((address) => {
        // console.log(address);
        setZip(address, lat, long);
      });
  };
  // Dispatching city, state, and zip code to store state
  const setZip = (address, lat, long) => {
    let city = address.results[0].address_components[2].long_name;
    // no state for sg
    // let state = address.results[5].address_components[4];
    let postal = address.results[0].address_components[6].long_name;
    console.log("CITY: ", city);
    console.log("postal: ", postal);
    console.log("addr: ", address);
    passbackFunc({ city: city, postal: postal, lat: lat, lng: long });
  };
  const handleClick = () => {
    getPosition();
  };
  return (
    <Button type="primary" onClick={handleClick} style={{ maxWidth: "200px" }}>
      Get my location!
    </Button>
  );
};

export default LocationGetter;
