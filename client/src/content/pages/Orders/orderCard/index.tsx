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
    <Card sx={{width:"18vw",margin:"20px"}}>
        <Stack direction={"row"} justifyContent={"space-around"} margin={"10px"}>
            {props.icon}
            <Box width={"200px"}>
                <Typography sx={{fontWeight:600}}> {props.heading}</Typography>
                <Typography>{props.Text1}</Typography>
                <Typography>{props.Text2}</Typography>
                <Typography>{props.Text3}</Typography>
            </Box>
        </Stack>
        <Button>{props.ButtonName}</Button>
    </Card>
  )
}

export default OrderCard
