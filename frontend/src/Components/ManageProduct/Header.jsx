import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

const Header = ({ title, level }) => {
  return <Title level={level}>{title}</Title>;
};

export default Header;
