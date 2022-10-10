import { Button, Modal, Space, Table, Tag } from "antd";
import React from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

// Redux
import { deleteProduct } from "../../../Redux/tmpProductSlice";

const ProductTable = ({ dispatch, curUser }) => {
  const columns = [
    {
      title: "Product name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (categories) => (
        <>
          {categories.map((cat) => {
            // shirt, women, men, pants, shoes, wearables
            // magenta, volcano, blue, purple, lime, gold
            let mapping = {
              women: "volcano",
              men: "blue",
              shirt: "magenta",
              pants: "purple",
              shoes: "lime",
              wearable: "gold",
            };
            return (
              <Tag color={mapping[cat[0]]} key={cat[0]}>
                {cat[0].charAt(0).toUpperCase() + cat[0].substr(1)}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        status = status[0];
        let color = "red";
        let statusTextSplit = status.split(/(?=[A-Z])/);
        let statusText = statusTextSplit.join(" ").toUpperCase();
        if (status === "brandNew") {
          color = "green";
          // statusText = 'Brand New'
        } else if (status === "goodCondition") {
          color = "geekblue";
          // statusText = 'Good condition'
        } else if (status === "averageCondition") {
          color = "orange";
          // statusText = 'Brand New'
        }

        return (
          <Tag color={color} key={statusText}>
            {statusText}
          </Tag>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        // console.log("In render actions: ", record);
        return (
          <Space size="middle">
            <Button
              style={{
                border: "none",
                color: "#3a3a3a",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <EditFilled />
            </Button>
            <Button
              style={{
                border: "none",
                color: "#800e0e",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => handleDeleteClick(record)}
            >
              <DeleteFilled />
            </Button>
          </Space>
        );
      },
    },
  ];

  const handleEditClick = () => {
    console.log("Edit...");
  };

  const handleDeleteClick = (record) => {
    console.log("Deleting...", record);
    let updatedProducts = curUser.user.products.filter(
      (product) => product.productName != record.productName
    );
    console.log("Updated Products: ", updatedProducts);
    Modal.confirm({
      title: `Are you sure you want to delete ${record.productName}?`,
      onOk: () => {
        dispatch(
          curUser.methods.setValue({
            ...curUser.user,
            products: updatedProducts,
          })
        );
        // To close modal
        dispatch(deleteProduct(record));
        return false;
      },
    });
  };

  const data = curUser.user.products;
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ProductTable;
