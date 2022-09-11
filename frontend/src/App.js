import Home from "./Pages/Home";
import Login from "./Pages/Login";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: "none",
      fontFamily: `"Lexend Deca", sans-serif`,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
