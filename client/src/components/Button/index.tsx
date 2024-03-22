import { Box, Button, Typography } from '@mui/material'
import React from 'react'

type ButtonProps ={
    type: string,
    icon : any,
    // handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Buttons = (props: ButtonProps) => {
  return (
    

   <Button >{props.icon} 
   <Typography 
   sx={{
    textTransform:"none",
    color:"black",
    // marginLeft:"15px",
    fontFamily:"poppins",
    fontWeight:500, 
    fontSize:"18px", 
    lineHeight:"26.09px"
  }}>
    {props.type}
  </Typography></Button>
    
  )
}

export default Buttons
