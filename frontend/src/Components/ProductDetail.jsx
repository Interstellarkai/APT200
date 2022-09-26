import * as React from "react";
// Icon
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// Design
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import ProductDetailUser from "./ProductDetailUser";

const ProductDetailEnumerate = ({ product, user }) => {
	const listing = product.descriptions.map((description) => {
		return <li>{description}</li>;
	});
const ProductDetail = ({ product, user }) => {
	const listing = product.descriptions.map((description) => {
		return <li>{description}</li>;
	});

	return (
		<div>
			<div>
				<Grid
					container
					direction={{ xs: "column", sm: "row" }}
					alignItems="stretch"
					padding={2}
				>
					<Grid item xs={12} sm={6} py={1}>
						<Card
							display="flex"
							alignItems="center"
							flexDirection="column"
							sx={{
								backgroundColor: "#E6F0FB",
								justify: "content",
								height: "100%",
								width: "100%",
							}}
						>
							<Box
								justifyContent="center"
								alignItems="center"
								sx={{
									margin: "auto",
									width: "80%",
								}}
							>
								<CardMedia
									component="img"
									title={product.name}
									image={product.media}
									height="100%"
									width="100%"
									alt="product"
									alignItems="center"
									objectFit="contain"
									sx={{ borderRadius: "5%" }}
								/>
							</Box>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								fontWeight: "bold",
								fontStyle: "Poppin",
							}}
						>
							<Box p={{ xs: 1, sm: 2, md: 3 }}>
								<Typography
									variant="h4"
									component="div"
									gutterBottom
								>
									{product.name}
								</Typography>
							</Box>
							{/* Responsive component for product history such that the  */}

							<Box
								bgcolor="#E6F0FB"
								p={{ xs: 1, sm: 2, md: 3 }}
								sx={{ borderRadius: "10%" }}
							>
								<Typography
									variant="h5"
									component="div"
									color="#0064d2"
									align="center"
								>
									{product.history}
								</Typography>
							</Box>
						</Box>
						<Box p={{ xs: 1, sm: 2, md: 3 }}>
							<Typography
								variant="h6"
								component="div"
								color="text.secondary"
								gutterBottom
							>
								Joined 7 years ago | Very Responsive | Verified
							</Typography>
							<ProductDetailUser user={user} />
							<Typography
								variant="h4"
								component="div"
								gutterBottom
							>
								${product.price}
							</Typography>
							<Typography
								variant="h6"
								component="div"
								gutterBottom
							>
								{product.location}
							</Typography>
							{/* an CheckCircleOutlineIcon icon followed by sentence brand new */}
							
							<Typography
								variant="h6"
								component="div"
								gutterBottom
							>
								{product.category}
							</Typography>
							<Stack direction="row" spacing={2}>
								<Button
									variant="outlined"
									sx={{
										backgroundColor: "#0064d2",
										color: "white",
										fontWeight: "light",
										width: "80%",
									}}
								>
									Chat
								</Button>
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</div>
			<div>
				<Typography variant="h6" component="div" gutterBottom>
					About
				</Typography>
				<Typography variant="body1" gutterBottom>
					{product.description}
				</Typography>
				<ul>{listing}</ul>
				<Typography variant="h6" component="div" gutterBottom>
					You May Also Like
				</Typography>
			</div>
		</div>
	);
};

export default ProductDetail;
