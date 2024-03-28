import { Box, Breadcrumbs, Stack, Typography } from '@mui/material'
import React from 'react'
import BasicBreadcrumbs from '../../../components/Breadcrumbs'
import OrderList from './orderList'
import OrderHeader from './orderHeader'
import OrderCard from './orderCard'
import Icon1 from "../../../asserts/images/icon1.png"
const Orders = () => {
  return (
    <Stack>
        <OrderHeader/>
      
      <OrderCard  icon= <Icon1/>
    heading= "Customer"
    Text1="Shristi Singh"
    Text2="Shristi@gmail.com"
    Text3="2464662546"
    ButtonName= "View Profile"/>
    </Stack>
  )
}

export default Orders
