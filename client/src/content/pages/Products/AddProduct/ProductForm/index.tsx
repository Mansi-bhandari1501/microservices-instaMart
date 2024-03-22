import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, TextField, Typography } from '@mui/material';
import Tags from '../../../../../atom/tags';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function ProductForm() {
  return (
    // <Box sx={{backgroundColor:"white", height:"89vh", width:"80vw", marginLeft:"15px", marginTop:"15px"}}>

    <Stack flexDirection={"row"} sx={{ flexGrow: 1 ,backgroundColor:"white", height:"80vh", width:"78vw", marginLeft:"15px", marginTop:"15px"}}>
     
     <Stack flexDirection={"column"} width={"50vw"} >
      <Grid container spacing={2} marginLeft={"10px"}>
        <Grid item xs={2} md={8} >
          <Typography>Product Name1</Typography>
          <TextField sx={{width:"35vw"}}/>
        </Grid>
        {/* <Grid item xs={2} md={8} >
        
        <Box sx={{height:"250px",border:"1px solid #c8c8c8",width:"30vw",backgroundColor:"#c8c8c8",borderRadius:"5px"}}></Box>

        </Grid> */}
        <Grid item xs={6} md={8} >
          <Typography>Description</Typography>
          <TextField className="text-fielD" sx={{width:"35vw",
        "& .MuiFilledInput-root":{
          height:"282px"

        }}}/>

        </Grid>
        <Grid item xs={6} md={8}>

          <Typography>Category</Typography>
          <TextField/>

        </Grid>
        <Grid item xs={6} md={8}>

          <Typography>Brand Name</Typography>
          <TextField/>

        </Grid>
        <Grid item xs={6} md={8}>
          <Typography>SKU</Typography>
          <TextField/>
        </Grid>
        <Grid item xs={4} md={4}>

          <Typography>Stock Quantity</Typography>
          <TextField/>

        </Grid>
        <Grid item xs={6} md={4}>

          <Typography> Regular Price</Typography>
          <TextField/>

        </Grid>
        <Grid item xs={6} md={4}>

          <Typography> Sale Price</Typography>
          <TextField/>

        </Grid>
        <Grid item xs={6} md={4}>

          <Typography> Sale Price</Typography>
          <Tags label="phones"/>

        </Grid>
      </Grid>
      heeelllll
      </Stack> 
      <Stack>

      </Stack>
      hello
    </Stack>
    // </Box>
  );
}