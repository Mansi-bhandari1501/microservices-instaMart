import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Button, Stack, TextField, Typography } from '@mui/material';
import Tags from '../../../../../atom/tags';
import TypographyText from '../../../../../components/Typography';
import DragAndDrap from '../../../../../components/DragAnd Drop';
import BasicBreadcrumbs from '../../../../../components/Breadcrumbs'
// import TypographyText from '../../../../components/Typography'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
type ProductButtonProps = {
  btn1: any,
  btn2: any,
  btn3: any,

}
export default function ProductForm(props: ProductButtonProps) {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
    console.log('file: ', file);
  };
  return (
    <Box>

      {/* <TypographyText   text1='Add Product' text2= <BasicBreadcrumbs/> /> */}

      <Stack flexDirection={"row"} sx={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "80vh", width: "78vw", marginLeft: "15px", marginTop: "10px",
      }}>

        <Stack marginLeft={"10px"} flexDirection={"column"} width={"50vw"} marginTop={"2vh"}>
          <Grid container spacing={1} marginLeft={"10px"}>
            <Grid item xs={2} md={8} >
              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Product Name</Typography>
              <TextField sx={{ width: "36vw", marginTop: "10px" }} />
            </Grid>

            <Grid item xs={6} md={8}  >
              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Description</Typography>
              <TextField className="text-fielD" sx={{
                marginTop: "10px",
                width: "36vw",
                "& .MuiFilledInput-root": {
                  height: "282px"

                }
              }} />

            </Grid>
            <Grid item xs={6} md={8} >

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Category</Typography>
              <TextField sx={{ width: "36vw", marginTop: "10px" }} />

            </Grid>
            <Grid item col-0 md={10} >

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Brand Name</Typography>
              <TextField sx={{ width: "36vw", marginTop: "10px" }} />

            </Grid>
            <Grid item xs={4} md={5} >
              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>SKU</Typography>
              <TextField sx={{ width: "16vw", marginTop: "10px" }} />
            </Grid>
            <Grid item xs={4} md={5}>

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Stock Quantity</Typography>
              <TextField sx={{ width: "15vw", marginTop: "10px" }} />

            </Grid>
            <Grid item xs={4} md={5}>

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>  Regular Price</Typography>
              <TextField sx={{ width: "16vw", marginTop: "10px" }} />

            </Grid>
            <Grid item xs={6} md={5}>

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}> Sale Price</Typography>
              <TextField sx={{ width: "15vw", marginTop: "10px" }} />

            </Grid>
            <Grid item xs={6} md={4}>

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}> Tag</Typography>
              <Box sx={{ border: "1px solid #D3D3D4", width: "36vw", height: "10vh", marginTop: "10px", borderRadius: "15px" }}>
                <Tags label="phones" />
              </Box>

            </Grid>
          </Grid>

        </Stack>
        <Stack sx={{ width: "20vw", marginTop: "15px" }}>

          <Grid item xs={6} sx={{ height: "10vh" }}>
            <Box width={'90%'} height={'35vh'} sx={{ backgroundColor: 'lightgray', borderRadius: '15px', margin: "10px" }}></Box>
            <Stack py={2} gap={1} sx={{ width: "28vw", height: "10vh" }}>
              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Product Gallery</Typography>

              <Box sx={{ width: "20vw", height: "2vh" }}>
                <FileUploader children={<DragAndDrap file={file} />} handleChange={handleChange} multiple name="file" />
                <Box marginTop={"200px"}>
                  <Button>{props.btn1}</Button>
                  <Button>{props.btn2}</Button>
                  <Button>{props.btn3}</Button>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Stack>


      </Stack>
    </Box>
  );
}