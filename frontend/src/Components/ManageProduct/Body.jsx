import AddItemTab from "./AddItemTab";
import EditItemTab from "./EditItemTab";

const Body = ({ index, dispatch, curUser }) => {
  const tabs = [
    <AddItemTab dispatch={dispatch} curUser={curUser} key="addItemTab" />,
    <EditItemTab dispatch={dispatch} curUser={curUser} key="editItemTab" />,
  ];
  return <div>{tabs[index]}</div>;
};

export default Body;
