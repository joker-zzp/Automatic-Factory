import * as React from "react";
import { BaseRouter, Navigation as Nav } from "./router/index"
import { Navigation } from "./containers/Navigation";
import {BrowserRouter as Router } from 'react-router-dom'
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  useMediaQuery
} from "@mui/material";
import { AppHeader } from "./containers/appBar"


// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const title = 'Automatic-Factory'
const navWidth = 240

function App() {
  // const colorMode = React.useContext(ColorModeContext)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () => 
    createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark': 'light',
      }
    }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex'}}>
            <CssBaseline>

              <AppHeader title={title} />
              <Navigation drawerWidth={navWidth} item={Nav}/>
              <Box component='main' sx={{ flexGrow: 1, p: 2 }}>
                <Toolbar />
                <BaseRouter />
              </Box>
            </CssBaseline>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
