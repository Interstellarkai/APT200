import React from "react";
import ProductTable from "./EditProductsComponents/ProductTable";
import Header from "./Header";

const EditItemTab = ({ dispatch, curUser }) => {
  return (
    <div>
      <Header title="Edit Items" level={2} />
      <ProductTable disptach={dispatch} curUser={curUser} />
    </div>
  );
};

export default EditItemTab;
