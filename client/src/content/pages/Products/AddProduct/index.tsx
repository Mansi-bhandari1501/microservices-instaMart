import React from 'react'
import BasicBreadcrumbs from '../../../../components/Breadcrumbs'
import TypographyText from '../../../../components/Typography'
import ProductForm from './ProductForm'
import { Box, Button } from '@mui/material'
import HeaderBreadcrumb from '../../../../components/Breadcrumbs'

const AddProduct = () => {
  return (
    <Box  >
        {/* <TypographyText   text1='Add Product' text2="" /> */}
        <HeaderBreadcrumb textStyles={{sx:{height:'32px' , width:'183px',margin:"20px"}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'Add Product'} breadcrumb = {[{text: 'Home', link : '/'},{text: 'All Products', link : '/'}]}/>     
         {/* <BasicBreadcrumbs tag1={""} tag2={"Home"} tag3={"OrderList"}/> */}
       <ProductForm btn1={"Delete"} btn2={"cancel"} btn3={""}/>
       
    </Box>
  )
}

export default AddProduct
