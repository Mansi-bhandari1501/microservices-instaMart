import { Box, Divider, IconButton, Stack } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BestSellerDashboard from '../../../../components/BestSellerDashboard';
import CustomButton from '../../../../components/CustomButton';

function BestSellers() {
    return (
        <Stack width={'40%'} p={2} sx={{ backgroundColor: 'white', borderRadius: '10px',blockSize:'fit-content' }} gap={1}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box fontWeight={'600'}>Best Sellers</Box>
                <IconButton><MoreVertIcon /></IconButton>
            </Stack>
            <Divider />
            <BestSellerDashboard name={'Product 1'} price1={'Rs 1222.00'} price2={'1234'} sales={'999 sales'} />
            <BestSellerDashboard name={'Product 1'} price1={'Rs 1222.00'} price2={'1234'} sales={'999 sales'} />
            <BestSellerDashboard name={'Product 1'} price1={'Rs 1222.00'} price2={'1234'} sales={'999 sales'} />
            <CustomButton onclick={() => { }} sxprops={{ sx: { width: '120px', height: '35px' } }} variant="contained" text="Report" />

        </Stack>
    )
}

export default BestSellers