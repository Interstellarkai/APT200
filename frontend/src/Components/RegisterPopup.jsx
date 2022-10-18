import { Done, Google } from "@mui/icons-material";
import SaveIcon from "@mui/icons-material/Save";
import ErrorMessage from "./ErrorMessage";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  Fab,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { Stack } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PAGES from "../pageRoute";
import userService from "../Services/user";

const RegisterPopup = (props) => {
  // Router
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { onClose, selectedValue, open, values } = props;
  const [inputValues, setInputValues] = useState({
    username: null,
    firstname: null,
    lastname: null,
    password: null,
    "confirm password": null,
  });
  const inputs = [
    "Username",
    "First Name",
    "Last Name",
    "Password",
    "Confirm Password",
  ];
  const [errorMessage, setErrorMessage] = useState(null);
  const [validForm, setValidForm] = useState(false);
  const handleClose = () => {
    onClose(selectedValue);
  };

  const isFormValid = () => {
    console.log("Input values: ", inputValues);
    let { username, firstname, lastname, password, ...confirm_password } =
      inputValues;
    confirm_password = confirm_password["confirm password"];
    if (
      (username && firstname && lastname && password && confirm_password) ===
        "" ||
      (username && firstname && lastname && password && confirm_password) ===
        null
    ) {
      // console.log("Null");
      return false;
    }
    return true;
  };

  const checkPasswordMatch = () => {
    return inputValues["confirm password"] === inputValues.password;
  };

  const handleOnChange = (e) => {
    console.log("Target name: ", e.target.name);
    let name = e.target.name;
    let val = e.target.value;
    if (name === "first name") name = "firstname";
    else if (name === "last name") name = "lastname";
    setInputValues({
      ...inputValues,
      [name]: val,
    });
  };

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();
    if (!checkPasswordMatch()) {
      setErrorMessage("Password mismatch");
    } else {
      try {
        const res = await userService.createUser(inputValues);
        console.log(res);
        // console.log("HEre");
        if (res) {
          setErrorMessage(null);
          setLoading(true);
          setSubmitted(true);
          setTimeout(() => {
            setIsSuccess(true);
            setLoading(false);
            setTimeout(() => {
              navigate(PAGES.loginPage);
            }, 1000);
          }, 3000);
        }
      } catch (e) {
        // console.log("In error");
        let eMsg = e.response.data.message;
        console.log("Error message: ", eMsg);
        setErrorMessage(eMsg);
        // if (eMsg === "username must be unique")
        //   setErrorMessage("Username already in use");
        // else setErrorMessage("Name must be more than 8 characters");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  // Use effects
  useEffect(() => {
    let val = isFormValid();
    // console.log("Val: ", val);
    setValidForm(val);
  }, [inputValues]);

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
                name={val.toLowerCase()}
                onChange={handleOnChange}
                type={
                  val === "Password" || val === "Confirm Password"
                    ? "password"
                    : "text"
                }
                sx={{ my: 1, mx: 5, fontSize: 2, width: "80%" }}
              />
            ))}
          </Box>
          {errorMessage !== null && (
            <Box width="100%">
              <ErrorMessage errorMessage={errorMessage} />
            </Box>
          )}
          {!submitted ? (
            <LoadingButton
              type="submit"
              variant="text"
              onClick={handleSubmitButtonClick}
              loading={loading}
              endIcon={
                submitted && (
                  <Typography>
                    Done
                    <Done color="success" />
                  </Typography>
                )
              }
              // loadingPosition="end"
              disabled={!validForm}
              // sx={{
              //   "&.Mui-disabled": {
              //     backgroundColor: "none",
              //     color: `${!loading && "green"}`,
              //   },
              // }}
            >
              {submitted ? "Done" : "Register"}
            </LoadingButton>
          ) : (
            <Box sx={{ m: 1, position: "relative" }}>
              <Fab
                aria-label="save"
                color={isSuccess && "success"}

                // onClick={handleButtonClick}
              >
                {isSuccess ? <Done /> : <SaveIcon />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
          )}

          <Typography variant="subtitle2" sx={{ mb: 3 }}>
            Already have an account? <Link href="#">Log in here!</Link>
          </Typography>
        </Stack>
      </form>
    </Dialog>
  );
};

export default RegisterPopup;
