import React from 'react'
import CardComponent from '../../../../components/CardComponent'
import OrderSubTotal from './orderSubTotal'
import OrderCard from '../orderCard'
// import Icon1 from "../../../../asserts/images/icon1.png"
import { ReactComponent as Icon1 } from "../../../../asserts/svg/ICON1.svg"
const OrderDetail = () => {
  return (
    <div>
      <OrderCard icon= <Icon1/>
    heading= "Customer"
    Text1="Shristi Singh"
    Text2="Shristi@gmail.com"
    Text3="2464662546"
    ButtonName= "View Profile"/>
      <OrderSubTotal/>
    </div>
  )
}

export default OrderDetail
