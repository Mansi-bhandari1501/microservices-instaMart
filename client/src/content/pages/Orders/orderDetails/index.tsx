import { Stack } from '@mui/material'
import React from 'react'
import OrderHeader from '../orderHeader'
import OrderShip from './orderInfo'
import OrderSubTotal from './orderSubTotal'

function OrderDetails() {
    return (
        <Stack height={"92vh"} p={0} gap={1} sx={{}} >
            <OrderHeader />
            <OrderShip />
            <OrderSubTotal/>
        </Stack>
    )
}

export default OrderDetails