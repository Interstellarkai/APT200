import {
  Cascader,
  Col,
  Form,
  Grid,
  InputNumber,
  Row,
  Typography,
  Upload,
} from "antd";
import React from "react";
import Header from "./Header";
import { FileImageOutlined } from "@ant-design/icons";
import ImageUpload from "./Input/ImageUpload";
import { Input } from "antd/lib";
import TextArea from "antd/lib/input/TextArea";

const AddItemTab = () => {
  let spans = {
    colSpan: 10,
  };

  const catOptions = [
    {
      value: "shirt",
      label: "Shirt",
    },
    {
      value: "pants",
      label: "Pants",
    },
    {
      value: "shoes",
      label: "Shoes",
    },
    {
      value: "wearable",
      label: "Wearable",
    },
    {
      value: "women",
      label: "Women",
    },
    {
      value: "men",
      label: "Men",
    },
  ];

  const statusOptions = [
    {
      value: "brandNew",
      label: "Brand new",
    },
    {
      value: "goodCondition",
      label: "Good Condition",
    },
    {
      value: "averageCondition",
      label: "Average Condition",
    },
    {
      value: "old",
      label: "Old",
    },
  ];

  return (
    <div>
      <Header title="Add Item" level={2} />
      <Form layout="vertical">
        <Row>
          <Col span={spans.colSpan}>
            <Form.Item label="Product Name">
              <Input maxLength={30} showCount allowClear />
            </Form.Item>
          </Col>
          <Col span={24 - spans.colSpan * 2}></Col>
          <Col span={spans.colSpan}>
            <Form.Item label="Category">
              <Cascader options={catOptions} placement="bottomRight" multiple />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={spans.colSpan}>
            <Form.Item label="Price">
              <InputNumber
                defaultValue={10}
                status={null}
                prefix="$   "
                min={0}
                max={1000}
                precision={2}
                style={{ minWidth: "50%", padding: "5px" }}
              ></InputNumber>
            </Form.Item>
          </Col>
          <Col span={24 - spans.colSpan * 2}></Col>
          <Col span={spans.colSpan}>
            <Form.Item label="Status">
              <Cascader options={statusOptions} placement="bottomRight" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Location"></Form.Item>
        <Form.Item label="Description">
          <TextArea showCount allowClear maxLength={100}></TextArea>
        </Form.Item>
        <Form.Item label="Add Images">
          <ImageUpload />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddItemTab;
