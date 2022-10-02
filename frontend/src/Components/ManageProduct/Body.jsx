import "antd/dist/antd.css";
import AddItemTab from "./AddItemTab";
import EditItemTab from "./EditItemTab";
import "./ManageProduct.css";

const tabs = [<AddItemTab />, <EditItemTab />];
const Body = ({ index }) => {
  return <div>{tabs[index]}</div>;
};

export default Body;
