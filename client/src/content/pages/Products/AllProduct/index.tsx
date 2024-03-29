import { Stack } from '@mui/material'
import React, { useState } from 'react'
import ProductHeader from './productHeader'
import TableForm from './TableForm'
// import ProductCard from '../../../../components/ProductCards'
import CardsForm from './allProductCards'

function ProductDisplayAdmin() {
    const [table, setTable] = useState<boolean>(false)
    return (
        <Stack p={4} gap={2} sx={{  }} >
            <ProductHeader setTable={setTable} />
            {table ? <TableForm /> : <CardsForm />}

        </Stack>
    )
}

export default ProductDisplayAdmin