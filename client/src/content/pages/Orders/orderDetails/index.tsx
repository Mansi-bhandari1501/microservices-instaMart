import React from 'react'
import CardComponent from '../../../../components/CardComponent'
import OrderSubTotal from './orderSubTotal'
import OrderCard from '../orderCard'
// import Icon1 from "../../../../asserts/images/icon1.png"
import { ReactComponent as Icon1 } from "../../../../asserts/svg/ICON1.svg"
import { Stack } from '@mui/material'
import OrderHeader from '../orderHeader'
const OrderDetail = () => {
  return (
    <div>
<OrderHeader/>
      <Stack direction={"row"} bgcolor={"white"} width={"78vw"} marginLeft={"20px"} borderRadius={"20PX"}>
      <OrderCard icon= <Icon1/>
    heading= "Customer"
    Text1="Full Name: Shristi Singh"
    Text2="Email: Shristi@gmail.com"
    Text3="Phone: 2464662546"
    ButtonName= "View Profile"/>
      <OrderCard icon= <Icon1/>
    heading= "Order Info"
    Text1="Shipping : Shristi Singh"
    Text2="Payment Method: Shristi@gmail.com"
    Text3="status: pending"
    ButtonName= "View Profile"/>
      <OrderCard icon= <Icon1/>
    heading= "Deliver to"
    Text1="Address: Shristi Singh"
    Text2="ambala"
    Text3="harayana"
    ButtonName= "View Profile"/>
      </Stack>
            <OrderSubTotal/>

    </div>
  )
}

export default OrderDetail
