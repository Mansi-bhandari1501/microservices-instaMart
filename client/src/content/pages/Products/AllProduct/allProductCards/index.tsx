import { Box, Pagination, Stack } from '@mui/material'
import React from 'react'
import ProductCard from '../../../../../components/ProductCards'

function CardsForm() {
    return (
        <Stack gap={3} p={2} height={"80vh"} >
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'flex-start'} gap={2}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                
                <ProductCard />
            </Box>
            <Pagination count={10} shape="rounded" />
        </Stack>

    )
}

export default CardsForm