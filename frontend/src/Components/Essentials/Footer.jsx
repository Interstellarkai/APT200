import { Box, Container } from "@mui/system";
import React from "react";
import FooterItem from "./FooterItem.jsx";
import Logo from "./MerchantDiceLogo.jsx";
import { Twitter } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";

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
              name="meta"
              component="img"
              sx={{ height: "inherit", objectFit: "contain" }}
              src={require("../../Assets/meta-icon.png")}
            />,
            <Twitter
              name="twitter"
              sx={{ color: theme.palette.primary.main }}
            />,
            <Box
              name="instagram"
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
