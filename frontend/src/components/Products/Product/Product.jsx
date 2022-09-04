import React from "react";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

// Create a Product component and pass in the product and onAddToCart props.
const Product = ({ product, onAddToCart }) => {
	// Uses the useStyles function to create a classes variable.
	const classes = useStyles();

	// Create a handleAddToCart function that invokes the onAddToCart function passed to the Product component and passes it the product’s id and the quantity (1).
	const handleAddToCart = () => onAddToCart(product.id, 1);

	// Return a Card component and renders the product’s media, name, description, and price, as well as the AddShoppingCart icon.
	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={product.media.source}
				title={product.name}
			/>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
						{product.name}
					</Typography>
					<Typography gutterBottom variant="h5" component="h2">
						${product.price.formatted}
					</Typography>
				</div>
				<Typography
					dangerouslySetInnerHTML={{ __html: product.description }}
					variant="body2"
					color="textSecondary"
					component="p"
				/>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Product;
