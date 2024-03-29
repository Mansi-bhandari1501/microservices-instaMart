
// import React from 'react'
// import CardComponent from '../../../../../../components/CardComponent'
// import OrderSubTotal from '../../orderSubTotal'
// import OrderCard from '../../../orderCard'
// // import Icon1 from "../../../../asserts/images/icon1.png"
// import { ReactComponent as Icon1 } from "../../../../asserts/svg/ICON1.svg"
// import { Stack } from '@mui/material'
// import OrderHeader from '../../../orderHeader'
// const OrderDetail = () => {
//   return (
//     <div>
// <OrderHeader/>
//       <Stack direction={"row"} bgcolor={"white"} width={"78vw"} marginLeft={"20px"} borderRadius={"20PX"}>
//       <OrderCard icon= <Icon1/>
//     heading= "Customer"
//     Text1="Full Name: Shristi Singh"
//     Text2="Email: Shristi@gmail.com"
//     Text3="Phone: 2464662546"
//     ButtonName= "View Profile"/>
//       <OrderCard icon= <Icon1/>
//     heading= "Order Info"
//     Text1="Shipping : Shristi Singh"
//     Text2="Payment Method: Shristi@gmail.com"
//     Text3="status: pending"
//     ButtonName= "View Profile"/>
//       <OrderCard icon= <Icon1/>
//     heading= "Deliver to"
//     Text1="Address: Shristi Singh"
//     Text2="ambala"
//     Text3="harayana"
//     ButtonName= "View Profile"/>
//       </Stack>
//             <OrderSubTotal/>

//     </div>
//   )
// }

// export default OrderDetail
import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CustomButton from '../../../../../components/CustomButton';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import OrderInfoCard from '../../../../../components/orderInfo';
import PaymentInfoCard from './paymentCard';
import Note from './Note';
function OrderShip() {
    return (
        <Stack gap={1} p={2} sx={{ backgroundColor: 'white', borderRadius: '15px' }}>
            <Stack direction={'row'} gap={3}>
                <Box sx={{ fontSize: '18px', fontWeight: '700' }}>Orders ID: #0000</Box>
                <Box sx={{ backgroundColor: 'rgb(255,183,89)', padding: '5px', fontSize: '14px', fontWeight: '600', borderRadius: '6px' }}>Pending</Box>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'}><CalendarMonthIcon />&nbsp; Mar 6,2024 - Mar 17,2024</Box>
                <Stack direction={'row'} gap={2}>
                    <Button variant="contained" sx={{ width: '70px', height: '48px' }}  ><LocalPrintshopOutlinedIcon /></Button>
                    <CustomButton onclick={() => { }} sxprops={{ sx: { width: '100px', height: '48px' } }} variant="contained" text="Save" />
                </Stack>
            </Stack>
            <Box display={'flex'} gap={2} flexWrap={'wrap'}>
                <OrderInfoCard icon={<PersonOutlinedIcon sx={{ fontSize: '35px' }} />} header={'Customer'} line1={'Full Name : chetan@gmail.com'} line2={' Name : chetan@gmail.com'} line3={'Phone : 9324292424'} />
                <OrderInfoCard icon={<ShoppingBagOutlinedIcon sx={{ fontSize: '35px' }} />} header={'Order Info'} line1={'Full Name : chetan@gmail.com'} line2={' Name : chetan@gmail.com'} line3={'Status : Pending'} />
                <OrderInfoCard icon={<ShoppingBagOutlinedIcon sx={{ fontSize: '35px' }} />} header={'Deliver to'} line1={'Full Name : chetan@gmail.com'} line2={' Name : chetan@gmail.com'} line3={'Status : Pending'} />
            </Box>
            <Stack direction={'row'} gap={2}>
                <PaymentInfoCard />
                <Note />
            </Stack>
        </Stack>
    )
}

export default OrderShip