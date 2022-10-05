import { Layout } from "antd";

import Navbar from "../Components/Essentials/Navbar";
import { Container } from "@mui/system";

import ManageProductWrapper from "../Components/ManageProduct/ManageProductWrapper";
import Footer from "../Components/Essentials/Footer";

const ManageProducts = () => {
  return (
    <Container
      height="100vh"
      maxWidth={false}
      disableGutters
      border="solid black 1px"
      sx={{
        height: "100vh",
        overflow: { xs: "auto", md: "auto" },
      }}
    >
      <Navbar />
      <ManageProductWrapper />
      <Footer />
    </Container>
  );
};

export default ManageProducts;
