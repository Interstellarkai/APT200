import React from "react";
import ProductTable from "./EditProductsComponents/ProductTable";
import Header from "./Header";

const EditItemTab = () => {
  return (
    <div>
      <Header title="Edit Items" level={2} />
      <ProductTable />
    </div>
  );
};

export default EditItemTab;
