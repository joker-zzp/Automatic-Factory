import {
  AppBar, 
  Toolbar,
  Typography
} from "@mui/material";
// import React from "react";

interface HeaderProp {
  title?: string
}

export function AppHeader(prop:HeaderProp) {

  return (
    <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Toolbar>
        <Typography variant='h4' noWrap component='div'>{prop.title ? prop.title:'title'}</Typography>
      </Toolbar>
    </AppBar>
  )
}
