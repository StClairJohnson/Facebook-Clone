import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import AddIcon from '@mui/icons-material/Add';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const theme = createTheme({
  palette: {
      primary: {
        main: "##1a237e",
      },
      secondary: {
        main: "#fff"
      }
  },
}
);

function Sidebar() {

  return (
  <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%', maxWidth: 280, bgcolor: 'background.paper'}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem>
          <FormGroup>
          <Stack direction="row">
          <Switch {...label} defaultChecked size="small"  color="primary"/>
          <Switch {...label} size="small" color="primary" />
          </Stack>
          </FormGroup>
          </ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem>
          <IconButton aria-label="more" size="large" style={{backgroundColor: '#1a237e'}} 
            color="secondary">
          <AddIcon/>
          </IconButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    </ThemeProvider>
  );
}

export default Sidebar;