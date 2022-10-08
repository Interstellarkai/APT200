import { Cascader, Col, Form, InputNumber, Row } from "antd";
import React from "react";
import Header from "./Header";
import { FileImageOutlined } from "@ant-design/icons";
import ImageUpload from "./Input/ImageUpload";
import { Input } from "antd/lib";
import TextArea from "antd/lib/input/TextArea";
import LocationGetter from "./MapComponents/LocationGetter";
import MapWrapper from "./MapComponents/MapWrapper";
import GoogleMap from "./MapComponents/GoogleMap";

import { useEffect } from "react";
import { useState } from "react";
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
const AddItemTab = () => {
  let spans = {
    colSpan: 10,
  };

  const [location, setLocation] = useState(null);
  const getLocation = (obj) => {
    setLocation(obj);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div>
      <Header title="Add Item" level={2} />
      <Form layout="vertical">
        <Row>
          <Col xs={24} lg={spans.colSpan}>
            <Form.Item label="Product Name">
              <Input maxLength={30} showCount allowClear />
            </Form.Item>
          </Col>
          <Col span={24 - spans.colSpan * 2} />
          <Col xs={24} lg={spans.colSpan}>
            <Form.Item label="Category">
              <Cascader options={catOptions} placement="bottomRight" multiple />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={spans.colSpan}>
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
          <Col span={24 - spans.colSpan * 2} />
          <Col xs={24} lg={spans.colSpan}>
            <Form.Item label="Status">
              <Cascader options={statusOptions} placement="bottomRight" />
            </Form.Item>
          </Col>
        </Row>

        <Row
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Form.Item label="Location of sale">
            <MapWrapper location={location} />
          </Form.Item>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LocationGetter passbackFunc={getLocation} />
        </Row>
        <Form.Item label="Description">
          <TextArea showCount allowClear maxLength={250}></TextArea>
        </Form.Item>
        <Form.Item label="Add Images">
          <ImageUpload />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddItemTab;
