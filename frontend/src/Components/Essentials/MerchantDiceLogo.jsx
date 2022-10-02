import { SvgIcon } from "@mui/material";
import React from "react";

import { ReactComponent as Logo } from "../../Assets/logo.svg";
// import logo from "../Assets/logo.svg";

const MerchantDiceLogo = () => {
  return <SvgIcon component={Logo} inheritViewBox />;
};

export default MerchantDiceLogo;
