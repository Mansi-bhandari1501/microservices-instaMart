// import React from 'react'
// import Typographys from '../../../components/Typography'
// import { Stack } from '@mui/material'
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// const SettingsLeftSide = () => {
//   return (
//     <Stack flexDirection={"row"} sx={{
//       flexGrow: 1,
//       backgroundColor: "white",
//       height: "80vh", width: "78vw", marginLeft: "15px", marginTop: "10px",  
//     }}>
//        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {/* <nav aria-label="main mailbox folders"> */}
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton href="/products">
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Personal Information" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Security" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Billing & Tax" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Plans" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <InboxIcon />
//               </ListItemIcon>
//               <ListItemText primary="Linked Shops" />
//             </ListItemButton>
//           </ListItem>
         
//         </List>
//       {/* </nav> */}
//       {/* <Divider /> */}
//       {/* <nav aria-label="secondary mailbox folders">
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemText primary="Trash" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="/products">
//               <ListItemText primary="Spam" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </nav> */}
//     </Box>
//     <Divider/>
//     </Stack>
//   )
// }

// export default SettingsLeftSide;



import { List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
function SettingsLeft() {
    return (

        <Stack sx={{ maxWidth: '300px', width: '400px' }} p={2}>
            <List aria-labelledby="nested-list-subheader"  >
                <ListItemButton>
                    <ListItemIcon>
                        <InfoOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Personal Information" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SecurityOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Security" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountBalanceWalletOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Billing & Tax" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ContentPasteOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Plans" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ShoppingBagOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Linked Shops" />
                </ListItemButton>
            </List>
        </Stack>

    )
}

export default SettingsLeft
