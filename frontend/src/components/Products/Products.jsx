import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

// Declare a functional component called Products that takes in props.
const Products = ({ products, onAddToCart }) => {
	// Declare a constant called classes and set it equal to the useStyles function.
	const classes = useStyles();

	// Declare a conditional statement that checks if there are no products. If there aren't, return a p tag with the text "Loading...".
	if (!products.length) return <p>Loading...</p>;

	// Declare a return statement that returns the main tag with the content class, and a div tag with the toolbar class.
	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			{/* Declare a Grid tag with the container, justify, and spacing attributes. */}
			<Grid container justify="center" spacing={4}>
				{/* Open curly braces to indicate logic */}
				{/* Declare a map function to iterate through the products array and return a Grid tag with the key, item, xs, sm, md, and lg attributes. */}
				{products.map((product) => (
					<Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
						{/* Declare a Product tag with the product and onAddToCart attributes. */}
						<Product product={product} onAddToCart={onAddToCart} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

// Export the Products component.
export default Products;
