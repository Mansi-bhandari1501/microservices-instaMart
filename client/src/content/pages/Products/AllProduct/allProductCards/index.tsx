import { Box, Pagination, Stack } from '@mui/material'
import React from 'react'
import ProductCard from '../../../../../components/ProductCards'
import { useAppSelector } from '../../../../../app/hooks'

function CardsForm() {
  const products = useAppSelector(state => state.product.products)
  console.log(products)
  return (
    <Stack gap={3} p={2} height={"80vh"} >
      <Box display={'flex'} flexWrap={'wrap'} justifyContent={'flex-start'} gap={2}>

        {products?.length === 0 && <>No new products's</>}
        {products && products?.length && products?.map((content) => (
          <div key={content.uuId}>
            <ProductCard
              uuId={content.uuId || ''}
              productName={content.productName || ''}
              description={content.description || ''}
              category={content.category || ''}
              brand= {content.brand || ''}
              regularPrice={content.regularPrice || ''}
              salePrice={content.salePrice || ''}
              sku={content.sku || ''}
              quantity={content.quantity || ''}
            // tag= {content.tag}
            />
          

          </div>
        ))}
      </Box>
      <Pagination count={10} shape="rounded" />
    </Stack>

  )
}

export default CardsForm