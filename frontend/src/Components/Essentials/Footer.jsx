import { Box, Container } from "@mui/system";
import React from "react";
import FooterItem from "./FooterItem.jsx";
import Logo from "./MerchantDiceLogo.jsx";
import { Instagram, Twitter, Facebook } from "@mui/icons-material";
import { Icon, IconButton, SvgIcon, useTheme } from "@mui/material";
import { ReactComponent as Meta } from "../../Assets/meta-icon.png";

const Footer = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      sx={{
        borderTop: "0.5px solid rgba(180, 179, 179, 0.8)",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <IconButton sx={{ display: { xs: "none", md: "block" } }}>
        <Logo />
      </IconButton>

      <Box
        sx={{
          //   bgcolor: "blue",
          //   my: "20px",
          width: "inherit",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "inherit",
          alignItems: { xs: "none", md: "center" },
        }}
      >
        <FooterItem title="Contact" value="+65 912345678" hasIcon={false} />
        <FooterItem
          title="Email"
          value="support@merchantdice.com"
          hasIcon={false}
        />
        <FooterItem
          title="Socials"
          value={[
            <Box
              component="img"
              sx={{ height: "inherit", objectFit: "contain" }}
              src={require("../../Assets/meta-icon.png")}
            />,
            <Twitter sx={{ color: theme.palette.primary.main }} />,
            <Box
              component="img"
              sx={{ height: "inherit", objectFit: "contain" }}
              src={require("../../Assets/instagram-icon.png")}
            />,
          ]}
          hasIcon={true}
        />
      </Box>
    </Container>
  );
};

export default Footer;
