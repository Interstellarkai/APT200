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

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { createElement } from "react";
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
  const indexTabHandler = (index) => {
    setIndexTab(index);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Sidebar
          items={items}
          indexHandler={indexTabHandler}
          selectedKey={indexTab}
        />
      </Sider>
      <Layout className="site-layout">
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
