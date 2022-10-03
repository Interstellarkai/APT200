import AddItemTab from "./AddItemTab";
import EditItemTab from "./EditItemTab";

const tabs = [<AddItemTab />, <EditItemTab />];
const Body = ({ index }) => {
  return <div>{tabs[index]}</div>;
};

export default Body;
