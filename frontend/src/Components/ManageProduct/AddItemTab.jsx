import { Col, Form, Grid, Row, Typography, Upload } from "antd";
import React from "react";
import Header from "./Header";
import { FileImageOutlined } from "@ant-design/icons";
import ImageUpload from "./Input/ImageUpload";

const AddItemTab = () => {
  return (
    <div>
      <Header title="Add Item" level={2} />
      <Form layout="vertical">
        <Form.Item label="Product Name"></Form.Item>
        <Form.Item label="Category"></Form.Item>
        <Form.Item label="Price"></Form.Item>
        <Form.Item label="Status"></Form.Item>
        <Form.Item label="Location"></Form.Item>
        <Form.Item label="Description"></Form.Item>
        <Form.Item label="Upload">
          <ImageUpload />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddItemTab;
