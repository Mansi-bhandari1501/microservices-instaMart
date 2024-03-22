import React from 'react'
import BasicBreadcrumbs from './Breadcrumbs'
import TypographyText from '../../../../components/Typography'
import ProductForm from './ProductForm'

const AddProduct = () => {
  return (
    <div>
        <TypographyText text1='Add Product' text2= <BasicBreadcrumbs/> />
       <ProductForm/>
    </div>
  )
}

export default AddProduct
