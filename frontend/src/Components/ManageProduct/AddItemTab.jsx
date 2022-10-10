import { Button, Cascader, Col, Form, InputNumber, Row, Space } from "antd";
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

// Redux
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addToItems, saveAddedItem } from "../../Redux/userSlice";
import { addProduct } from "../../Redux/tmpProductSlice";

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

const ruleSet = {
  productName: [{ required: true, message: "Please input a product name" }],
  category: [{ required: true, message: "Please select a category" }],
  price: [{ required: true, message: "Please input a price" }],
  status: [{ required: true, message: "Please input a status" }],
  location: [{ required: false, message: "Please state a location" }],
  description: [{ required: true, message: "Please input a description" }],
};

const AddItemTab = ({ dispatch, curUser }) => {
  const spans = {
    colSpan: 10,
  };

  const user = curUser.user;

  const [loadings, setLoadings] = useState([]);
  const [location, setLocation] = useState(user.savedItem.location);
  const [save, setSave] = useState(false);
  const getLocation = (obj) => {
    setLocation(obj);
  };

  const onFinish = (values) => {
    values.location = location;
    // console.log("Values of form: ", values);
    let index = 0;

    if (save) {
      console.log("saving config...");
      dispatch(curUser.methods.saveAddedItem(values));
      setSave(false);
    } else {
      index = 1;
      console.log("Adding new item...");
      let newItem = { ...values, username: user.username };
      dispatch(curUser.methods.addToItems(newItem));
      dispatch(addProduct(newItem));
    }

    // Temporary logic. Should be used with API response.

    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
  };

  useEffect(() => {
    // console.log("In AddItemTab, location updated: ", location);
  }, [location]);

  return (
    <div>
      <Header title="Add Item" level={2} />
      <Form layout="vertical" onFinish={onFinish}>
        <Row>
          <Col xs={24} lg={spans.colSpan}>
            <Form.Item
              label="Product Name"
              name="productName"
              rules={ruleSet.productName}
              initialValue={user.savedItem.productName}
            >
              <Input maxLength={30} showCount allowClear />
            </Form.Item>
          </Col>
          <Col span={24 - spans.colSpan * 2} />
          <Col xs={24} lg={spans.colSpan}>
            <Form.Item
              label="Category"
              name="category"
              rules={ruleSet.category}
              initialValue={user.savedItem.category}
            >
              <Cascader options={catOptions} placement="bottomRight" multiple />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={spans.colSpan}>
            <Form.Item
              label="Price"
              name="price"
              rules={ruleSet.price}
              initialValue={!user.savedItem.price ? 10 : user.savedItem.price}
            >
              <InputNumber
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
            <Form.Item
              label="Status"
              name="status"
              rules={ruleSet.status}
              initialValue={user.savedItem.status}
            >
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
          <Form.Item
            label="Location of sale"
            name="location"
            rules={ruleSet.location}
          >
            <Input
              disabled
              value={location === null ? "Not specified" : location.city}
            />
            <MapWrapper location={user.savedItem.location || location} />
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
        <Form.Item
          label="Description"
          name="description"
          rules={ruleSet.description}
          initialValue={user.savedItem.description}
        >
          <TextArea showCount allowClear maxLength={250}></TextArea>
        </Form.Item>
        <Form.Item label="Add Images">
          <ImageUpload />
        </Form.Item>
        <Row style={{ display: "flex", justifyContent: "right" }}>
          <Form.Item label=" " colon={false}>
            <Space>
              <Button
                type="ghost"
                htmlType="submit"
                onClick={() => setSave(true)}
                loading={loadings[0]}
              >
                Save item
              </Button>
              <Button type="primary" htmlType="submit" loading={loadings[1]}>
                Add item
              </Button>
            </Space>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
};

export default AddItemTab;
