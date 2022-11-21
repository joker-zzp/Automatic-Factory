// import * as React from 'react'
// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
// import MuiDrawer from '@mui/material/Drawer';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  // Link
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { NavigationItem } from '../router'


interface NavProp {
  drawerWidth: number,
  item?: NavigationItem[],
}

export function Navigation(prop:NavProp) {

  const navigate = useNavigate()

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: prop.drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: prop.drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {prop.item?.map((obj) => (
            <ListItem key={obj.title} onClick={() => navigate(obj.path)}>
              <ListItemButton>
                <ListItemText primary={obj.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
      </Box>
    </Drawer>
  )
}
