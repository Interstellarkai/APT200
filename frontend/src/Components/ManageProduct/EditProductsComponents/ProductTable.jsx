import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

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
              <Tag color={mapping[cat[0]]}>
                {" "}
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

        return <Tag color={color}>{statusText}</Tag>;
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
      render: (e) => {
        console.log(e);
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
            >
              <DeleteFilled />
            </Button>
          </Space>
        );
      },
    },
  ];

  console.log(curUser.user);
  return (
    <div>
      <Table columns={columns} dataSource={curUser.user.products} />
    </div>
  );
};

export default ProductTable;
