import * as React from "react";
// Icon
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const ProductDetailUser = ({ user }) => {
	return (
		<Stack direction="row" spacing={2} padding={0}>
			<Fab size="small" color="white" aria-label="profile_photo">
				<Avatar
					alt={user.username}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKroaVeqiqOxev5js7z9NQBCMxL6WCYGWLSDX0IlG&s"
					sx={{ width: 40, height: 40 }}
				/>
			</Fab>
			<Typography variant="h5" color="text.secondary">
				{user.username}
			</Typography>
			<Rating value={4} readOnly size="large" />
			<Typography variant="h5" fontWeight="bold">
				4.2
			</Typography>
			{/* Alter the text size based on md and sm */}
			<Typography
				variant="h5"
				color="text.secondary"
				sx={{ fontSize: { md: "1.5rem", sm: "1rem" } }}
			>
				from 349 Reviews
			</Typography>
		</Stack>
	);
};

export default ProductDetailUser;
