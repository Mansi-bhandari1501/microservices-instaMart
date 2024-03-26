import { Box, Breadcrumbs, Stack, Typography } from '@mui/material'
import React from 'react'
import BasicBreadcrumbs from '../../../components/Breadcrumbs'
import OrderList from './orderList'
import OrderHeader from './orderHeader'

const Orders = () => {
  return (
    <Stack>
        <OrderHeader/>
      
      <OrderList/>
    </Stack>
  )
}

export default Orders
