import { Box, Grid } from "@mui/material";
import React from "react";
import Advertisement from "../../Advertisement";
import CategoryCard from "../../../../components/CategoryCard";
import ProductItemCard from "../../../../components/ProductCards";
import Header from "../../../../layouts/SlidebarLayout/Navbar";

const Home = () => {
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

      <Box sx={{m: '20px 200px 20px 200px'}}>
        <Grid container gap={4}>
          {/* <ProductItemCard />
          <ProductItemCard /> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;