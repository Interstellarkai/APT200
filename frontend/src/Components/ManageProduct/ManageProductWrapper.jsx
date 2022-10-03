import React from "react";
import Sidebar from "./Siderbar";
import Body from "./Body";
import { Layout } from "antd";
import { useState } from "react";
import {
  UploadOutlined,
  PlusSquareOutlined,
  EditOutlined,
} from "@ant-design/icons";

import "./ManageProduct.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { createElement } from "react";
import { Container } from "@mui/system";
const { Header, Sider, Content } = Layout;

const ManageProductWrapper = () => {
  const items = [
    {
      key: 0,
      icon: <PlusSquareOutlined />,
      label: "Add Item",
    },
    {
      key: 1,
      icon: <EditOutlined />,
      label: "Edit Item",
    },
  ];
  const [collapsed, setCollapsed] = useState(true);
  const [indexTab, setIndexTab] = useState(0);
  const [broken, setBroken] = useState(null);
  const indexTabHandler = (index) => {
    setIndexTab(index);
  };

  return (
    <Layout
      style={{ position: "relative", maxHeight: "85%", overflow: "hidden" }}
    >
      <Sider
        className="sidebar"
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint={"xs"}
        onBreakpoint={(broken) => {
          setBroken(broken);
        }}
        collapsedWidth={broken ? 0 : "80px"}
      >
        <Sidebar
          items={items}
          indexHandler={indexTabHandler}
          selectedKey={indexTab}
        />
      </Sider>
      <Layout
        className="site-layout"
        onClick={() => {
          if (collapsed === false) setCollapsed(true);
        }}
      >
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Body index={indexTab} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ManageProductWrapper;
