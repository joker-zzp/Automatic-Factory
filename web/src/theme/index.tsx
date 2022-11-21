import { green, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/system";

export const redTheme = createTheme({
  palette: {
    primary: red[500],
  },
})

export const orangeTheme = createTheme({
  palette: {
    primary: orange[500]
  }
})

export const greenTheme = createTheme({
  palette: {
    primary: green[500]
  }
})
