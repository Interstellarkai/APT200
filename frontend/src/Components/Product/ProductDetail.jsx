import * as React from "react";
// Icon
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// Design
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ProductDetailUser from "../ProductDetailUser";

import PAGES from "../../pageRoute";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();

  const listing = product.descriptions.map((description) => {
    return <li>{description}</li>;
  });

  const handleGoChat = () => {
    navigate(PAGES.chat, { state: { seller: product.userId } });
  };

  return (
    <div>
      <div>
        {/* Set grid's direction as row for webpage, set grid's direction as column for mobile */}
        <Grid
          container
          direction={{ sm: "column", lg: "row" }}
          alignItems="stretch"
          sx={{
            paddingLeft: { sm: "10px", lg: "50px" },
            paddingRight: { sm: "10px", lg: "50px" },
          }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            sx={{ width: { md: "40%", sm: "100%" } }}
          >
            <Card
              display={"flex"}
              sx={{
                backgroundColor: "#E6F0FB",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                minHeight: { xs: "400px", lg: "550px" },
                maxHeight: { xs: "400px", lg: "550px" },
                minWidth: { xs: "400px", lg: "550px" },
                maxWidth: { xs: "400px", lg: "550px" },
                borderRadius: "20px",
              }}
            >
              <Box
                item
                display="flex"
                sx={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  display={"flex"}
                  src={product.img}
                  sx={{
                    width: "80%",
                    height: "80%",
                    objectFit: "contain",
                  }}
                ></Box>
              </Box>
            </Card>
          </Grid>
          {/* Grid for Jacket, Joined date etc. */}
          <Grid
            item
            container
            // Make grid center
            justifyContent="flex-end"
            alignItems="center"
            sx={{ width: { md: "60%", sm: "100%" } }}
          >
            <Grid
              item
              xs
              container
              direction="column"
              spacing={3}
              padding={2}
              justifyContent="flex-end"
            >
              <Grid
                item
                justify="flex-end"
                sx={{
                  fontWeight: "bold",
                  fontStyle: "Poppin",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ py: 1 }}
                >
                  <Typography variant="h3" component="div">
                    {product.productName}
                  </Typography>
                  <Box
                    bgcolor="#E6F0FB"
                    align=""
                    padding={1}
                    sx={{ borderRadius: "10%" }}
                  >
                    <Typography variant="h5" color="#0064d2" align="center">
                      {product.date}
                    </Typography>
                  </Box>
                </Stack>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Joined 7 years ago | Very Responsive | Verified
                </Typography>
                <ProductDetailUser user={product.username} />
                <Typography variant="h3" sx={{ py: 2 }}>
                  ${product.price}
                </Typography>
              </Grid>
              <Grid item container direction="row" spacing={1}>
                <Grid item>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {product.productCondition}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container direction="row" spacing={1}>
                <Grid item>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item>
                  <Typography variant="body1">Meet up</Typography>
                </Grid>
              </Grid>
              <Grid item container direction="row" spacing={1}>
                <Grid item>
                  <CheckCircleOutlineIcon />
                </Grid>
                <Grid item>
                  <Typography variant="body1">{product.location}</Typography>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: {
                    sm: "center",
                    md: "left",
                  },
                  alignItems: "center",
                }}
              >
                {/* Button is to fill the 80% width */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0064d2",
                    color: "white",
                    fontWeight: "light",
                    width: "80%",
                  }}
                  onClick={handleGoChat}
                >
                  Chat
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          container
          direction="column"
          alignItems="stretch"
          // Padding left based on sm and md
          sx={{
            paddingLeft: {
              sm: "10%",
              md: "5%",
            },
          }}
        >
          <Grid
            item
            sx={{
              marginTop: { xs: "10px", lg: "30px" },
              paddingLeft: { xs: "10px", lg: "0px" },
            }}
          >
            <Typography variant="h3" gutterBottom>
              About
            </Typography>
          </Grid>
          <Grid item sx={{ paddingLeft: { xs: "10px", lg: "0px" } }}>
            {/* Set some spacing between each listing */}
            <Typography variant="subtitle1" gutterBottom>
              {listing}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              marginTop: { xs: "25px", lg: "40px" },
              paddingLeft: { xs: "10px", lg: "0px" },
            }}
          >
            <Typography variant="h4" gutterBottom>
              You May Also Like
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default ProductDetail;
