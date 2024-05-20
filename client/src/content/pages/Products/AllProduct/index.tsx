import { Stack } from '@mui/material'
import React, { useState } from 'react'
import ProductHeader from './productHeader'
import TableForm from './TableForm'
// import ProductCard from '../../../../components/ProductCards'
import CardsForm from './allProductCards'
import Header from '../../../../layouts/SlidebarLayout/Navbar'

function ProductDisplayAdmin() {
    const [table, setTable] = useState<boolean>(false)
    return (
        <>
        {/* <Header/> */}
            <ProductHeader setTable={setTable} />
        <Stack p={2} gap={2} height={"83vh"} >
            {table ? <TableForm /> : <CardsForm />}

        </Stack>
        </>
    )
}

export default ProductDisplayAdmin