import { Done, Google } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Stack, width } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Essentials/Navbar";
import PAGES from "../pageRoute";
import { setDefaultUser } from "../Redux/userSlice";
import loginService from "../Services/login";

// Redux

const Login = () => {
  // Redux
  const dispatch = useDispatch();

  // Router
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validCredentials, setValidCredentials] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [check, setCheck] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();
    try {
      const res = await loginService.login({
        inputs,
      });
      // console.log("In login, user is : ", res.token);
      if (res.token) {
        // setUser(user);
        dispatch(setDefaultUser());
        navigate(PAGES.homePage);
        setInputs({
          email: "",
          password: "",
        });
      }
    } catch (e) {
      setValidCredentials(false);
      console.log(e);
    }
  };

  const handleOnChange = (e) => {
    let val = e.target.value;
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if ((e.target.name === "email" && re.test(val)) || val === "") {
    //   setIsValidEmail(true);
    // } else {
    //   setIsValidEmail(false);
    // }

    setInputs({
      ...inputs,
      [e.target.name]: val,
    });
  };

  const handleCheckChange = () => {
    setCheck(!check);
  };

  console.log(isValidEmail);

  return (
    <Box position="relative" bgcolor="red" height="100vh" overflow="hidden">
      <Box
        position="absolute"
        component="img"
        src={require("../Assets/login-background-image.png")}
        sx={{ objectFit: "cover", width: "100vw" }}
        // border="1px solid"
        height="inherit"
      />
      <Box height="inherit" maxWidth="xl" margin="auto">
        <Box
          position="relative"
          // border="1px solid"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="inherit"
        >
          <Paper
            elevation={3}
            sx={{ opacity: "0.95", padding: { xs: 2, md: 5 } }}
          >
            <form onSubmit={handleSubmit}>
              <Stack justifyContent="center" alignItems="center">
                <Typography variant="h3" my={2}>
                  Sign in
                </Typography>
                <Box
                  component="form"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  // bgcolor="yellow"
                  width="inherit"
                >
                  <TextField
                    label="Username"
                    name="email"
                    sx={{ my: 1, mx: 5, width: "100%", fontSize: "1em" }}
                    onChange={handleOnChange}
                    value={inputs.email}
                  />
                  {/* <TextField
                    label="Email"
                    name="email"
                    type="email"
                    sx={{ my: 1, mx: 5, width: "100%", fontSize: "1em" }}
                    onChange={handleOnChange}
                    value={inputs.email}
                    error={!isValidEmail}
                    helperText={!isValidEmail ? "Invalid Email" : ""}
                  /> */}

                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    sx={{ my: 1, mx: 5, width: "100%", fontSize: "1em" }}
                    onChange={handleOnChange}
                    value={inputs.password}
                  />

                  <Box
                    width="inherit"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <FormControlLabel
                      label="Remember me"
                      control={
                        <Checkbox
                          checked={check}
                          onChange={handleCheckChange}
                        />
                      }
                    />
                    <Link
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Forgot password
                    </Link>
                  </Box>
                  {!validCredentials && (
                    <Typography sx={{ color: "#d90000" }}>
                      Invalid login details!
                    </Typography>
                  )}

                  <LoadingButton
                    type="submit"
                    variant="text"
                    onClick={handleSubmitButtonClick}
                    loading={loading}
                    loadingIndicator="Logging in..."
                    sx={{
                      // bgcolor: "white",
                      boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.3)",
                      width: "100%",
                      color: "black",
                      my: 1,
                    }}
                  >
                    Login
                  </LoadingButton>
                  <Typography py={1}>OR</Typography>
                  <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    startIcon={<Google />}
                  >
                    {/* <img src={require("../Assets/google-icon.png")} /> */}
                    Continue with Google
                  </Button>
                  <Typography variant="subtitle2" sx={{ my: 3 }}>
                    Don't have an account? Create one now!
                  </Typography>
                  <Button variant="contained" sx={{ width: "100%" }}>
                    Create Account
                  </Button>
                  {/* {user === false ? (
                    'Not Logged In'
                  ) : (
                    <div>Logged In, Welcome {user.name}</div>
                  )} */}
                </Box>
              </Stack>
            </form>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
