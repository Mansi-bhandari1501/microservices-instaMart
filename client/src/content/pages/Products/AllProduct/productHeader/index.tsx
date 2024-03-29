import { Stack, Switch, Typography } from '@mui/material'
import React from 'react'
// import TypographyText from '../../../components/TypographyText'
import HearderBreadcrumb from '../../../../../components/Breadcrumbs'
import CustomButton from '../../../../../components/CustomButton'
import { useNavigate } from 'react-router'
interface PropsType {
    setTable: any
}

function ProductHeader(props: PropsType) {
    const navigate = useNavigate()
    const handleAddProduct = () => {
        navigate('/products/addProduct')
    }
    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'start'}>
            <Stack>
                <HearderBreadcrumb text={'Product Details'} textStyles={{ sx: {}, fontSize: "24px", fontWeight: "600", lineHeight: "28.44px" }} breadcrumb={[{ text: 'Home', link: '/' }]} />
            </Stack>
            <Stack direction={'row'} alignItems={'center'}>
                <Typography fontSize={'15'} fontWeight={' 600'} >Table </Typography>
                <Switch onChange={(event) => {
                    props.setTable(event.target.checked)
                }} />
            </Stack>
            <CustomButton onclick={handleAddProduct} sxprops={{ sx: { width: '200px', height: '48px' } }} variant="contained" text="Add Product" />
        </Stack>
    )
}

export default ProductHeader