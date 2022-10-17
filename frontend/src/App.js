import 'antd/dist/antd.min.css';

import Products from './Components/Products';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Advertisement from './Components/Advertisement';
import ProductDetail from './Components/ProductDetail';
import ManageProducts from './Pages/ManageProducts';

import Catalogue from './Pages/Catalogue';
import colors from './Components/colors';

import PAGES from './pageRoute';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import LocationGetter from './Components/ManageProduct/MapComponents/LocationGetter';
import GoogleMap from './Components/ManageProduct/MapComponents/GoogleMap';
import MapWrapper from './Components/ManageProduct/MapComponents/MapWrapper';

import { Pages } from '@mui/icons-material';

import { useSelector } from 'react-redux';
import ImageRender from './Components/ManageProduct/Input/ImageRender';

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
      textTransform: 'none',
      fontFamily: `"Lexend Deca", sans-serif`,
    },
  },
});

customTheme = responsiveFontSizes(customTheme);

let product = {
  id: 1,
  name: 'Jacket',
  price: 99,
  history: '2 weeks ago',
  descriptions: ['Jacket', 'Cheap', 'Good', 'Nice'],
  location: 'Pioneer MRT',
  media:
    'https://raw.githubusercontent.com/Interstellarkai/APT200/8cbc4e8870f3b88666cb75ebc6ae12e8ef7066a0/frontend/src/Assets/Item/jacket.png',
};

let user = {
  id: 1,
  username: 'John',
};

const App = () => {
  // const tmpProducts = useSelector((state) => state.tmpProducts.value);
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route exact path={PAGES.homePage} element={<Home />}></Route>
          <Route exact path={PAGES.loginPage} element={<Login />}></Route>
          <Route
            exact
            path={PAGES.manageProductsPage}
            element={<ManageProducts />}
          ></Route>
          <Route exact path={PAGES.catalogue} element={<Catalogue />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
