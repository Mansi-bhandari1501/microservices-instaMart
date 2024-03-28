import { Box, Button, InputBase, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Maintain from "../../../asserts/images/maintainence.png";

import Arrow from '@mui/icons-material/ArrowBackIos';
const Login = () => {
  return (
  <Stack sx={{bgcolor:"#F9FAFB", justifyContent:"center",alignItems:"center" , height:"100vh"}}>
    <img style={{width:"800px",height:"600px"}} src={Maintain} alt=''/>
    <Typography sx={{fontFamily:"sans-serif",fontSize:"55px",color:"rgba(0,0,0,0.898)",fontWeight:600, lineHeight:"80px"}}>Under Maintaince</Typography>
    <Typography sx={{fontFamily:"sans-serif",fontSize:"15px",color:"rgba(0,0,0,0.898)",fontWeight:400, lineHeight:"56px"}}> Sorry for inconviencevdvedvbdfvrfvvdvdvdvdvdvdvbebrbrbrd </Typography>
   <Button startIcon={<Arrow sx={{height:"12px"}}/>}>Go back home</Button>
  </Stack>
  )
}

export default Login
