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

const ProductDetail = ({ product, user }) => {
	const listing = product.descriptions.map((description) => {
		return <li>{description}</li>;
	});

	return (
		<div>
			<div>
				{/* Set grid's direction as row for webpage, set grid's direction as column for mobile */}
				<Grid
					// border="solid black 1px"
					container
					direction={{ sm: "column", md: "row" }}
					alignItems="stretch"
					padding={2}
				>
					<Grid
						item
						// container
						direction="column"
						alignItems="center"
						sx={{ width: {md: "40%", sm: "100%"} }}

					>
						<Card
							display="flex"
							sx={{
								backgroundColor: "#E6F0FB",
								justify: "content",
								height: "100%",
								width: "100%",
								flexDirection: "column",
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
									sx={{
										borderRadius: "5%",
										objectFit: "contain",
									}}
								/>
							</Box>
						</Card>
					</Grid>
					{/* Grid for Jacket, Joined date etc. */}
					<Grid item container sx={{ width: {md: "60%", sm: "100%"} }}>
						<Grid
							item
							xs
							container
							direction="column"
							spacing={3}
							padding={2}
						>
							<Grid
								item
								xs
								sx={{
									fontWeight: "bold",
									fontStyle: "Poppin",
								}}
							>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="center"
									spacing={2}
								>
									<Typography
										variant="h3"
										component="div"
										gutterBottom
										sx={{
											fontSize: {
												xs: "1.5rem",
												sm: "2rem",
												md: "2.5rem",
												lg: "3rem",
												xl: "3.5rem",
											},
										}}
									>
										{product.name}
									</Typography>
									<Box
										bgcolor="#E6F0FB"
										width="20%"
										height="20%"
										sx={{ borderRadius: "10%" }}
									>
										<Typography
											variant="h5"
											color="#0064d2"
											align="center"
										>
											{product.history}
										</Typography>
									</Box>
								</Stack>
								<Typography
									variant="body2"
									color="text.secondary"
									gutterBottom
								>
									Joined 7 years ago | Very Responsive |
									Verified
								</Typography>
								<ProductDetailUser user={user} />
								<Typography variant="h3" gutterBottom>
									${product.price}
								</Typography>
							</Grid>
							<Grid item container direction="row" spacing={1}>
								<Grid item>
									<CheckCircleOutlineIcon />
								</Grid>
								<Grid item>
									<Typography variant="body1">
										Brand New
									</Typography>
								</Grid>
							</Grid>
							<Grid item container direction="row" spacing={1}>
								<Grid item>
									<CheckCircleOutlineIcon />
								</Grid>
								<Grid item>
									<Typography variant="body1">
										Meet up
									</Typography>
								</Grid>
							</Grid>
							<Grid item container direction="row" spacing={1}>
								<Grid item>
									<CheckCircleOutlineIcon />
								</Grid>
								<Grid item>
									<Typography variant="body1">
										{product.location}
									</Typography>
								</Grid>
							</Grid>
							<Grid item>
								<Button
									variant="contained"
									sx={{
										backgroundColor: "#0064d2",
										color: "white",
										fontWeight: "light",
										width: "80%",
									}}
								>
									Chat
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
			<div>
				<Grid
					container
					direction="column"
					alignItems="stretch"
					padding={2}
				>
					<Grid item>
						<Typography variant="h4" gutterBottom>
							About
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h6" gutterBottom>
							<ul>{listing}</ul>
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h4" gutterBottom>
							You May Also Like
						</Typography>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
export default ProductDetail;
