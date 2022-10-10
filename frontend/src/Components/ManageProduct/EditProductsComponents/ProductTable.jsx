import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Modal,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import React from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

import { catOptions, statusOptions, ruleSet } from "../inputs";

// Redux
import {
  addProduct,
  deleteProduct,
  editOneProduct,
} from "../../../Redux/tmpProductSlice";
import { useState } from "react";
import { useEffect } from "react";
import TextArea from "antd/lib/input/TextArea";

const ProductTable = ({ dispatch, curUser }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();
  useEffect(() => {
    console.log("Use effect, curUser");
  }, [curUser.user.products]);

  const columns = [
    {
      title: "Product name",
      dataIndex: "productName",
      key: "productName",
      render: (pName, record) => {
        return editingRow === record.key ? (
          <Form.Item name="productName" rules={ruleSet.productName}>
            <Input showCount allowClear maxLength={30} />
          </Form.Item>
        ) : (
          <p>{pName}</p>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (categories, record) => (
        <>
          {editingRow === record.key ? (
            <Form.Item name="category" rules={ruleSet.category}>
              <Cascader multiple options={catOptions} />
            </Form.Item>
          ) : (
            categories.map((cat) => {
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
            })
          )}
        </>
      ),
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price, record) => {
        return editingRow === record.key ? (
          <Form.Item name="price" rules={ruleSet.price}>
            <InputNumber prefix="$   " min={0} max={1000} precision={2} />
          </Form.Item>
        ) : (
          <p>${price}</p>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="status" rules={ruleSet.status}>
              <Cascader options={statusOptions} />
            </Form.Item>
          );
        } else {
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
        }
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description, record) => {
        return editingRow === record.key ? (
          <Form.Item name="description" rules={ruleSet.description}>
            <TextArea showCount allowClear maxLength={250} />
          </Form.Item>
        ) : (
          <p>{description}</p>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        // console.log("In render actions: ", record);
        return (
          <Space size="middle">
            {editingRow === null || editingRow !== record.key ? (
              <>
                <Button
                  style={{
                    border: "none",
                    color: "#3a3a3a",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <EditFilled
                    onClick={() => {
                      handleEditClick(record);
                      form.setFieldsValue({
                        productName: record.productName,
                        category: record.category,
                        price: record.price,
                        status: record.status,
                        description: record.description,
                      });
                    }}
                  />
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
                </Button>{" "}
              </>
            ) : (
              <>
                <Button htmlType="submit" type="link">
                  Save
                </Button>
                <Typography.Link
                  style={{ color: "red" }}
                  onClick={() => setEditingRow(null)}
                >
                  Cancel
                </Typography.Link>
              </>
            )}
          </Space>
        );
      },
    },
  ];

  const handleEditClick = (record) => {
    console.log("Edit...");
    console.log(record);
    setEditingRow(record.key);
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

  const onFinish = (values) => {
    // Does not account for location info and pictures!!!
    values = { ...values, key: editingRow };
    // console.log("values: ", values);
    // Update user products
    // let tmpData = [...data];
    // let index = tmpData.findIndex((d) => editingRow === d.key);
    // tmpData.splice(index, 1, values);
    // console.log(tmpData);
    dispatch(curUser.methods.editOneItem(values));

    dispatch(editOneProduct(values));
    // dispatch(addProduct(values));
    // Reset editing cause done
    setEditingRow(null);
  };

  const data = curUser.user.products;
  return (
    <Form form={form} onFinish={onFinish}>
      <Table columns={columns} dataSource={data} />
    </Form>
  );
};

export default ProductTable;
