import Products from "./Components/Products";

let products = [
	{
		id: 1,
		name: "iPhone 12",
		price: 999,
		description: "The latest iPhone",
		media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
	},
	{
		id: 2,
		name: "iPhone 12",
		price: 999,
		description: "The latest iPhone",
		media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
	},
	{
		id: 3,
		name: "iPhone 12",
		price: 999,
		description: "The latest iPhone",
		media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
	},
	{
		id: 4,
		name: "iPhone 12",
		price: 999,
		description: "The latest iPhone",
		media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
	},
	{
		id: 5,
		name: "iPhone 12",
		price: 999,
		description: "The latest iPhone",
		media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
	},
	{
		id: 6,
		name: "iPhone 12",
		price: 999,
		description: "The latest iPhone",
		media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
	},
];

const App = () => {
	return <Products products={products} />;
};

export default App;
