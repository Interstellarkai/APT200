import { Menu } from "antd";

const Sidebar = ({ items, indexHandler, selectedKey }) => {
  return (
    <div>
      {/* <div className="logo" /> */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[{ selectedKey }]}
        items={items}
        onClick={(e) => indexHandler(e.key)}
      />
    </div>
  );
};

export default Sidebar;
