export const catOptions = [
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

export const statusOptions = [
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

export const ruleSet = {
  productName: [{ required: true, message: "Please input a product name" }],
  category: [{ required: true, message: "Please select a category" }],
  price: [{ required: true, message: "Please input a price" }],
  status: [{ required: true, message: "Please input a status" }],
  location: [{ required: false, message: "Please state a location" }],
  description: [{ required: true, message: "Please input a description" }],
};
