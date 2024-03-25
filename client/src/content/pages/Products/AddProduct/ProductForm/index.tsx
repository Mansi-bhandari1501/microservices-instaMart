import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Stack, TextField, Typography } from '@mui/material';
import Tags from '../../../../../atom/tags';
import TypographyText from '../../../../../components/Typography';
import DragAndDrap from '../../../../../components/DragAnd Drop';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function ProductForm() {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
    console.log('file: ', file);
  };
  return (
    // <Box sx={{backgroundColor:"white", height:"89vh", width:"80vw", marginLeft:"15px", marginTop:"15px"}}>

    <Stack flexDirection={"row"} sx={{
      flexGrow: 1,
      backgroundColor: "white",
      height: "80vh", width: "78vw", marginLeft: "15px", marginTop: "0px",  
    }}>

      <Stack  marginLeft={"10px"} flexDirection={"column"} width={"50vw"} marginTop={"2vh"}>
        <Grid container spacing={1} marginLeft={"10px"}>
          <Grid item xs={2} md={8} >
            <Typography>Product Name</Typography>
            <TextField sx={{ width: "36vw" }} />
          </Grid>
          {/* <Grid item xs={2} md={8} >
        
        <Box sx={{height:"250px",border:"1px solid #c8c8c8",width:"30vw",backgroundColor:"#c8c8c8",borderRadius:"5px"}}></Box>

        </Grid> */}
          <Grid item xs={6} md={8}  >
            <Typography>Description</Typography>
            <TextField className="text-fielD" sx={{
              width: "36vw",
              "& .MuiFilledInput-root": {
                height: "282px"

              }
            }} />

          </Grid>
          <Grid item xs={6} md={8} >

            <Typography>Category</Typography>
            <TextField sx={{ width: "36vw" }} />

          </Grid>
          <Grid item col-0 md={10} >

            <Typography>Brand Name</Typography>
            <TextField sx={{ width: "36vw" }} />

          </Grid>
          <Grid item xs={4} md={5} >
            <Typography>SKU</Typography>
            <TextField sx={{ width: "16vw" }} />
          </Grid>
          <Grid item xs={4} md={5}>

            <Typography>Stock Quantity</Typography>
            <TextField sx={{ width: "15vw" }} />

          </Grid>
          <Grid item xs={4} md={5}>

            <Typography> Regular Price</Typography>
            <TextField sx={{ width: "16vw" }} />

          </Grid>
          <Grid item xs={6} md={5}>

            <Typography> Sale Price</Typography>
            <TextField sx={{ width: "15vw" }} />

          </Grid>
          <Grid item xs={6} md={4}>

            <Typography> Sale Price</Typography>
            <Box sx={{  width: "15vw" }}>
              <Tags label="phones" />
            </Box>

          </Grid>
        </Grid>

      </Stack>
      <Stack sx={{width:"20vw",marginTop:"15px"}}>
      
        <Grid item xs={6} sx={{height:"10vh"}}>
          <Box width={'90%'} height={'35vh'} sx={{ backgroundColor: 'lightgray', borderRadius: '15px',margin:"10px" }}></Box>
          <Stack py={2} gap={1} sx={{width:"28vw",height:"50vh"}}>
            <TypographyText text1={'Product Gallery'} text2={""} />
            <Box sx={{width:"20vw",height:"10vh"}}>
            <FileUploader children={<DragAndDrap file={file} />} handleChange={handleChange} multiple name="file" />
            </Box>
          </Stack>
        </Grid>
      </Stack>


    </Stack>
    // </Box>
  );
}