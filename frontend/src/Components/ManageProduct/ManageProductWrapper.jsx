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
  const [broken, setBroken] = useState(null);
  const indexTabHandler = (index) => {
    setIndexTab(index);
  };

  return (
    <Layout style={{ maxHeight: "85%", overflow: "hidden" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh", display: { xs: "none" } }}
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
            // padding: { xs: 0, md: 24 },
            minHeight: 280,
          }}
          brea
        >
          <Body index={indexTab} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ManageProductWrapper;
