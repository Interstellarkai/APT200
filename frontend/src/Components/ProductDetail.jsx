import * as React from "react";
// Icon
// import Fab from "@mui/material/Fab";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// Design
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";
import { Button } from "@mui/material";
import ProductDetailUser from "./ProductDetailUser";

const ProductDetail = ({ product, user }) => {
	const listing = product.descriptions.map((description) => {
		return <li>{description}</li>;
	});

	return (
		<Paper elevation={0}>
			<Paper elevation={0}>
				<Grid
					container
					direction="row"
					alignItems="stretch"
					padding={2}
				>
					<Grid item sx={{ width: "40%" }}>
						<Card sx={{ backgroundColor: "#E6F0FB" }}>
							<Box
								sx={{
									margin: "auto",
									width: "50%",
								}}
							>
								<CardMedia
									component="img"
									title={product.name}
									image={product.media}
									height="100%"
									width="100%"
									objectFit="contain"
									sx={{ borderRadius: "5%" }}
								/>
							</Box>
						</Card>
					</Grid>
					<Grid item xs={12} sm container>
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
			</Paper>
			<Paper elevation={0}>
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
			</Paper>
		</Paper>
	);
};

export default ProductDetail;
