import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import Advertisement from "../../Advertisement";
import CategoryCard from "../../../../components/CategoryCard";
import ProductItemCard from "../../../../components/ProductCards";
import Header from "../../../../layouts/SlidebarLayout/Navbar";
import ProductCard from "../../../../components/ProductCards";
import { useAppSelector } from "../../../../app/hooks";

const Home = () => {
  const products = useAppSelector(state => state.product.products)
  console.log(products)
  return (
    <Box>
      {/* <Header /> */}
      <Box>
        <Advertisement />
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        sx={{ m: "20px 200px 20px 200px" }}
        gap={5}
      >
        <CategoryCard category={`Popular`} />
        <CategoryCard category={`Popular`} />
        <CategoryCard category={`Popular`} />
        <CategoryCard category={`Popular`} />
        <CategoryCard category={`Popular`} />
      </Box>

      <Stack direction={"row"}  sx={{m: '20px 200px 20px 200px'}}>
        {/* <Grid container gap={4}> */}
         
        {/* {products?.length === 0 && <>No new products's</>}
        {products && products?.length && products?.map((content) => (
          <Stack  key={content.uuId}>
            <ProductCard
              uuId={content.uuId || ''}
              productName={content.productName || ''}
              description={content.description || ''}
              category={content.category || ''}
              brand= {content.brand || ''}
              regularPrice={content.regularPrice || ''}
              salePrice={content.salePrice || ''}
              sku={content.sku || ''}
              quantity={content.quantity || ''} */}
            {/* // tag= {content.tag} */}
            {/* />
        {/* </Grid> */}
        {/* </Stack> */}
        {/* ))} */} 
      </Stack>
    </Box>
  );
};

export default Home;