import { SvgIcon } from "@mui/material";
import React from "react";

import { ReactComponent as Logo } from "../../Assets/logo-with-name.svg";
// import logo from "../Assets/logo.svg";

const MerchantDiceLogoName = () => {
  return <SvgIcon component={Logo} inheritViewBox />;
};

export default MerchantDiceLogoName;
