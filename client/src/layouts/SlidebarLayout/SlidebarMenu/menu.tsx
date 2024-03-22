import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { ReactComponent as DashboardLogo } from "../../../asserts/svg/1.svg"
import { ReactComponent as Ticket } from "../../../asserts/svg/2.svg"
import { ReactComponent as ChatBot } from "../../asserts/svg/3.svg"
import { ReactComponent as Order } from "../../asserts/svg/4.svg"
import { ReactComponent as Customers } from "../../asserts/svg/5.svg"
import { Box } from '@mui/material';
export default function NestedList() {
  const [open1, setOpen1] = React.useState(true);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };

  return (
    <Box marginTop={"35px"} marginLeft={"30px"}>

    <List
      sx={{ width: '90%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Nested List Items
    //     </ListSubheader>
    //   }
    >
      <ListItemButton>
        <ListItemIcon>
        <DashboardLogo/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {/* <ListItemButton>
        <ListItemIcon>
          <Ticket/> 
        </ListItemIcon>
        <ListItemText primary="All Tickets" />
      </ListItemButton> */}
      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="All Tickets" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Chat Bot" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
        <DashboardLogo/>
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <Ticket/> 
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
    
      <ListItemButton>
        <ListItemIcon>
        <DashboardLogo/>
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
    </Box>
  );
}