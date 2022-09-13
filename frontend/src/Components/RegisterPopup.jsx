import { Add, Done, Google } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";

const RegisterPopup = (props) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { onClose, selectedValue, open, values } = props;
  const inputs = ["Username", "Email", "Password", "Confirm Password"];

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleSubmitButtonClick = () => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      setSubmitted(true);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle textAlign="center">Register</DialogTitle>
      <form onSubmit={handleSubmit}>
        <Stack justifyContent="center" alignItems="center">
          <Button variant="contained" startIcon={<Google />}>
            {/* <img src={require("../Assets/google-icon.png")} /> */}
            Continue with Google
          </Button>
          <Typography py={1}>OR</Typography>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center"
            // bgcolor="yellow"
            width="inherit"
          >
            {inputs.map((val) => (
              <TextField
                key={val}
                required
                label={val}
                sx={{ my: 1, mx: 5, fontSize: 2, width: "80%" }}
              />
            ))}
          </Box>
          <LoadingButton
            type="submit"
            variant="text"
            onClick={handleSubmitButtonClick}
            loading={loading}
            endIcon={submitted && <Done color="success" />}
            // loadingPosition="end"
            disabled={submitted}
            sx={{
              "&.Mui-disabled": {
                backgroundColor: "none",
                color: `${!loading && "green"}`,
              },
            }}
          >
            {submitted ? "Done" : "Register"}
          </LoadingButton>
          <Typography variant="subtitle2" sx={{ mb: 3 }}>
            Already have an account? <Link href="#">Log in here!</Link>
          </Typography>
        </Stack>
      </form>
    </Dialog>
  );
};

export default RegisterPopup;
