import { Avatar, Box, Button, Card, CardContent, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

type cardProps={
    icon: any,
    heading: string,
    Text1: string,
    Text2: string,
    Text3: string,
    ButtonName: string,
}

const OrderCard = (props: cardProps) => {
  return (
    <Card sx={{width:"15vw",margin:"20px"}}>
        <Stack direction={"row"} justifyContent={"space-around"} margin={"10px"}>
            {props.icon}
            <Box>
                <Typography> {props.heading}</Typography>
                <Typography>Full Name: {props.Text1}</Typography>
                <Typography>Email: {props.Text2}</Typography>
                <Typography>Phone:{props.Text3}</Typography>
            </Box>
        </Stack>
        <Button>{props.ButtonName}</Button>
    </Card>
  )
}

export default OrderCard
