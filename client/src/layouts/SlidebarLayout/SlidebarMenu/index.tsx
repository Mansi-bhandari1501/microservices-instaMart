import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Buttons from '../../../components/Button'
// import logo from "../../asserts/images/competition.png"
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';// import Ticket from "../../asserts/images/ticket.png"
// import { ReactComponent as DashboardLogo } from "../../../asserts/svg/1.svg"
// import { ReactComponent as Ticket } from "../../../asserts/svg/2.svg"
// import { ReactComponent as ChatBot } from "../../../asserts/svg/3.svg"
// import { ReactComponent as Order } from "../../../asserts/svg/4.svg"
// import { ReactComponent as Customers } from "../../../asserts/svg/5.svg"
// import { ReactComponent as Logo } from "../../asserts/svg/logo.svg"
import { ReactComponent as Logo } from "../../../asserts/svg/logo.svg"
import { Settings } from '@mui/icons-material';
import NestedList from './menu';
import { Outlet } from 'react-router-dom';
const SlideBar = () => {
  return (
    <Stack sx={{ backgroundColor: "#F6F8FF", flexDirection: "row", gap: "3px" }}>

      <Stack sx={{ height: "100vh", width: "18vw", backgroundColor: "white" }}>
        <Stack sx={{ flexDirection: "row", marginTop: "10px", gap: "5px" }} >
          {/* <img style={{width:"40px", height:"30px"}}
        src={logo} alt=''></img> */}
          <Logo style={{ marginLeft: "100px" }} />
          <Typography sx={{ fontFamily: "poppins", fontWeight: 600, fontSize: "22px" }}>  Flight Ease </Typography>
        </Stack>
        <NestedList />

      </Stack>

    </Stack>
  )
}

export default SlideBar
