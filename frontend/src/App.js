import Products from "./Components/Products";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import colors from "./Components/colors";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

let products = [
  {
    id: 1,
    name: "iPhone 12",
    price: 999,
    description: "The latest iPhone",
    media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
  },
  {
    id: 2,
    name: "iPhone 12",
    price: 999,
    description: "The latest iPhone",
    media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
  },
  {
    id: 3,
    name: "iPhone 12",
    price: 999,
    description: "The latest iPhone",
    media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
  },
  {
    id: 4,
    name: "iPhone 12",
    price: 999,
    description: "The latest iPhone",
    media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
  },
  {
    id: 5,
    name: "iPhone 12",
    price: 999,
    description: "The latest iPhone",
    media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
  },
  {
    id: 6,
    name: "iPhone 12",
    price: 999,
    description: "The latest iPhone",
    media: "https://cdn.mos.cms.futurecdn.net/nCLvAtSHdMfMBHUtmu6TCf.jpg",
  },
];

let customTheme = createTheme({
  palette: {
    primary: {
      main: `${colors.mainBlue}`,
    },
    secondary: {
      main: `${colors.mainGrey}`,
    },
  },
  typography: {
    allVariants: {
      textTransform: "none",
      fontFamily: `"Lexend Deca", sans-serif`,
    },
  },
});

customTheme = responsiveFontSizes(customTheme);

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* <Home /> */}
      <Login />
    </ThemeProvider>
  );
};

export default App;
