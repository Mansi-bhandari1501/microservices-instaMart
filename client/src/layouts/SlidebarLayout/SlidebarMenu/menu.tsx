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
// import { ReactComponent as Ticket } from "../../../asserts/svg/2.svg"
import { ReactComponent as ChatBot } from "../../../asserts/svg/3.svg"
import { ReactComponent as Order } from "../../../asserts/svg/4.svg"
import { ReactComponent as Ticket } from "../../../asserts/svg/5.svg"
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ProductIcon from '@mui/icons-material/Inventory';
import TaskIcon from '@mui/icons-material/Task';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function NestedList() {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  const [isLoggedin, setIsLoggedin] = React.useState(false);
 
  const navigate = useNavigate()
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleLogout = () => {
    console.log("Logoutttt")
    localStorage.removeItem("auth");
    localStorage.removeItem("persist:root");
    setIsLoggedin(false);
    navigate("/")
  }
  return (
    <Box height={"auto"} marginTop={"35px"} marginLeft={"30px"}>

      <List
        sx={{ width: '90%', maxWidth: 360, bgcolor: 'background.paper', height: "50vh" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      //   subheader={
      //     <ListSubheader component="div" id="nested-list-subheader">
      //       Nested List Items
      //     </ListSubheader>
      //   }
      >
        <ListItemButton  href='/home/dashboard'>
          <ListItemIcon>
            <DashboardLogo />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={handleClick2}>
          <ListItemIcon>
            <ProductIcon  sx={{ color: "black" }}/>
          </ListItemIcon>
          <ListItemText primary="Products" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} href='/products' >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="All Products" />
            </ListItemButton>
            {/* <ListItemButton sx={{ pl: 4 }} href='/products/addProduct'>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Add Product" />
            </ListItemButton> */}
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick1}>
          <ListItemIcon>
            <Ticket />
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
              <ListItemText primary="All Ticket" />
            </ListItemButton>
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
            <ChatBot />
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
        <ListItemButton href='/orders'>
          <ListItemIcon>
            <TaskIcon sx={{ color: "black" }}/>
          </ListItemIcon>
          <ListItemText primary="Order List" />
        </ListItemButton>
        <ListItemButton href='/home'>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>

        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );
}