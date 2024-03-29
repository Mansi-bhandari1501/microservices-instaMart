import { Box, Stack } from '@mui/material'
import React from 'react'
import MasterCard from '../../../../../../asserts/images/mastercard.png'
function PaymentInfoCard() {
    return (

        <Stack p={1.5} gap={2} width={'270px'} sx={{ border: '1px solid rgb(240,240,237)', backgroundColor: 'rgb(255,255,255)', borderRadius: '6px' }}>
            <Box sx={{ fontWeight: '600', fontSize: '19px' }}>Payment Info</Box>
            <Stack>
                <Stack direction={'row'}>
                    <Box className='image' width={'40px'} height={'20px'}>
                        <img src={MasterCard} alt="" style={{width:" 100%", height: "100%",borderRadius: "10px"}}/>
                        </Box>
                    <Box sx={{ color: '#4E4E4C', fontSize: '15px' }}>Master Card **** **** 1276</Box>
                </Stack>
                <Box sx={{ color: '#4E4E4C', fontSize: '15px' }}>Business name: shweta </Box>
                <Box sx={{ color: '#4E4E4C', fontSize: '15px' }}>Phone: +91 33165541986</Box>
            </Stack>
        </Stack>
    )
}

export default PaymentInfoCard 