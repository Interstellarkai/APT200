import { Col, Form, Grid, Row, Typography, Upload } from "antd";
import React from "react";
import Header from "./Header";
import { FileImageOutlined } from "@ant-design/icons";
import ImageUpload from "./Input/ImageUpload";
import { Input } from "antd/lib";

const AddItemTab = () => {
  return (
    <div>
      <Header title="Add Item" level={2} />
      <Form layout="vertical">
        <Row>
          <Col span={12}>
            <Form.Item label="Product Name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Category"></Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="Price"></Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Status"></Form.Item>
          </Col>
        </Row>
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
