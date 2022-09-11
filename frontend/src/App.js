import Home from "./Pages/Home";
import Login from "./Pages/Login";
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

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
