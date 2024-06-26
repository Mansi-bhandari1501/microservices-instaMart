import React from 'react'
import BasicBreadcrumbs from '../../../../components/Breadcrumbs'
import TypographyText from '../../../../components/Typography'
import ProductForm from '../AddProduct/ProductForm'
import { Box, Button } from '@mui/material'
import HeaderBreadcrumb from '../../../../components/Breadcrumbs'

const EditProduct = () => {
  return (
    <Box  >
        {/* <TypographyText   text1='Add Product' text2=""/>  */}
        <HeaderBreadcrumb textStyles={{sx:{height:'32px' , width:'183px'}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'Add Product'} breadcrumb = {[{text: 'Home', link : '/'}]}/>      {/* <BasicBreadcrumbs tag1={""} tag2={"Home"} tag3={"OrderList"}/> */}
       <ProductForm btn1={"update"} btn2={"update"} btn3={"cancel"}/>
       
    </Box>
  )
}

export default EditProduct
