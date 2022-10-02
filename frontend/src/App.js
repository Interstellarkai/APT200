import Products from "./Components/Products";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Advertisement from "./Components/Advertisement";
import ProductDetail from "./Components/ProductDetail";
import ManageProducts from "./Pages/ManageProducts";
import colors from "./Components/colors";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

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

let product = {
  id: 1,
  name: "Jacket",
  price: 99,
  history: "2 weeks ago",
  descriptions: ["Jacket", "Cheap", "Good", "Nice"],
  location: "Pioneer MRT",
  media:
    "https://raw.githubusercontent.com/Interstellarkai/APT200/8cbc4e8870f3b88666cb75ebc6ae12e8ef7066a0/frontend/src/Assets/Item/jacket.png",
};

let user = {
  id: 1,
  username: "John",
};

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* <ProductDetail product={product} user={user} /> */}
      {/* <Home /> */}
      {/* <Login/> */}
      <ManageProducts />
    </ThemeProvider>
  );
};

export default App;
