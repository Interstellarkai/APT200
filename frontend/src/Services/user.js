import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3001/auth" });

// Login
const login = async (credentials) => {
  try {
    const response = await API.post("/login", credentials);
    return response.data;
  } catch (e) {
    console.log("Error logging in\n", e);
  }
};

// Register
const createUser = async (credentials) => {
  // const { ...data } = credentials;
  console.log("In createUser API", credentials);
  const response = await API.post("/register", credentials);
  console.log(response.data);
  // .then((res)=>console.log(res.response.data))
  // .catch((e)=>console.log(e.response.data))
  return response.data;
};

export default { login, createUser };
