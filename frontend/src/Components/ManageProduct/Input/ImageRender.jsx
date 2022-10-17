// Component is used for testing

import { CardMedia } from "@mui/material";
import { width } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ImageService from "../../../Services/image";

const ImageRender = () => {
  const [data, setData] = useState([]);
  //   const [fetchData, setFetchData] = useState(true);
  useEffect(() => {
    console.log("Awaiting");
    // axios
    //   .get("http://localhost:3001/api/images/")
    //   .then((res) => {
    //     console.log(res);
    //     setData(res.data);
    //   })
    //   .catch((e) => {
    //     console.log("Error getting images:\n", e);
    //   });
    // console.log("Done");

    ImageService.getAllImages()
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((e) => console.log("Error getting images:\n", e));
  }, []);

  const getBase64 = (buffer) => {
    const to_return = btoa(
      new Uint8Array(buffer).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
      }, "")
    );
    return to_return;
  };

  return (
    <div>
      {data.map((d) => {
        const img_string = getBase64(d.img.data.data);
        // return <img src={`data:image/png;base64,${img_string}`} width={300} />;
        return (
          <CardMedia
            component="img"
            //paddingTop="56.25%" // 16:9
            title={"dkansd"}
            src={`data:image/png;base64,${img_string}`}
            height="194"
            width="10"
            // objectFit="contain"
          />
        );
      })}
    </div>
  );
};

export default ImageRender;
