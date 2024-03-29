import { Stack } from '@mui/material'
import React from 'react'
import OrderHeader from '../orderHeader'
import OrderShip from './orderInfo'
import OrderFooter from './orderSubTotal'

function OrderDetails() {
    return (
        <Stack p={4} gap={2} sx={{}} >
            <OrderHeader />
            <OrderShip />
            <OrderFooter/>
        </Stack>
    )
}

export default OrderDetails