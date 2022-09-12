import React from "react";
import Grid from "@mui/material/Grid";
import Product from "./Product";

const Products = ({ products }) => {
	if (!products.length) return <p>Loading...</p>;

	return (
		<main
			flexGrow="1"
			backgroundColor="theme.palette.background.default"
			padding="theme.spacing(3)"
		>
			{/* <div theme.mixins.toolbar />{" "} */}
			<Grid container justify="center" spacing={4}>
				{products.map((product) => (
					<Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

// Export the Products component.
export default Products;
