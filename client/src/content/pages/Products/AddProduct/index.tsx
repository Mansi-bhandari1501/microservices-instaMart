import React from 'react'
import BasicBreadcrumbs from './Breadcrumbs'
import TypographyText from '../../../../components/Typography'
import ProductForm from './ProductForm'
import { Box } from '@mui/material'

const AddProduct = () => {
  return (
    <Box  >
        <TypographyText   text1='Add Product' text2= <BasicBreadcrumbs/> />
       <ProductForm/>
    </Box>
  )
}

export default AddProduct
