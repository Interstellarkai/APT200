import "antd/dist/antd.min.css";

import Products from "./Components/Products";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Advertisement from "./Components/Advertisement";
import ProductDetail from "./Components/ProductDetail";
import ManageProducts from "./Pages/ManageProducts";
<<<<<<< HEAD
import Catalogue from "./Pages/Catalogue";
import colors from "./Components/colors";

import PAGES from "./pageRoute";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

=======
import colors from "./Components/colors";

>>>>>>> main
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import LocationGetter from "./Components/ManageProduct/MapComponents/LocationGetter";
import GoogleMap from "./Components/ManageProduct/MapComponents/GoogleMap";
import MapWrapper from "./Components/ManageProduct/MapComponents/MapWrapper";
<<<<<<< HEAD
import { Pages } from "@mui/icons-material";
=======
import { useSelector } from "react-redux";
>>>>>>> main

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
  const tmpProducts = useSelector((state) => state.tmpProducts.value);
  return (
    <ThemeProvider theme={customTheme}>
<<<<<<< HEAD
      <Router>
        <Routes>
          {/* <ProductDetail product={product} user={user} /> */}
          <Route exact path={PAGES.homePage} element={<Home />}></Route>
          <Route exact path={PAGES.loginPage} element={<Login />}></Route>
          <Route
            exact
            path={PAGES.manageProductsPage}
            element={<ManageProducts />}
          ></Route>
          <Route exact path={PAGES.catalogue} element={<Catalogue />}></Route>
          {/* <MapWrapper /> */}
          {/* <GoogleMap /> */}
        </Routes>
      </Router>
=======
      {/* <ProductDetail product={product} user={user} /> */}
      {/* <Home /> */}
      {/*<Login />*/ }
      <ManageProducts />
      {/* <Products products={tmpProducts.products} /> */}
>>>>>>> main
    </ThemeProvider>
  );
};

export default App;
