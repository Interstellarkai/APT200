import { Layout } from "antd";

import Navbar from "../Components/Essentials/Navbar";
import { Container } from "@mui/system";

import ManageProductWrapper from "../Components/ManageProduct/ManageProductWrapper";

const ManageProducts = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Navbar />
      <ManageProductWrapper />
    </Container>
  );
};

export default ManageProducts;
