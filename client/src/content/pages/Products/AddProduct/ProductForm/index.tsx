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
import { useAppDispatch } from '../../../../../app/hooks';
import { registerProduct } from '../../../../../feature/Products/productAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
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
  const navigate=useNavigate();
  const dispatch = useAppDispatch();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brandName, setBrandName] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");



  const data = {

    productName: productName,
    description: description,
    category: category,
    brand: brandName,
    regularPrice: regularPrice,
    salePrice: salePrice,
    sku: sku,
    quantity: quantity,
    // tag: string

  }
  const navigateTo =()=>{
    navigate("/products")
  }
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("frontend", data);
    dispatch(registerProduct(data))
    .unwrap()
            .then((res) => {
              console.log(res,"❤️❤️❤️❤️")
                if (res.status == 201) {
                    console.log(res.data)
                    // toast.success("Product Added!", {
                    //   position: "top-center"
                    // });
                    navigate("/products")
                    setTimeout(() => {
                      toast.success("Product Added!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }, 1);
                    
                  //  setTimeout(navigateTo, 5000);
                    // setTimeout(function(){ navigate("/products")}, 2000);
                    // setTimeout(navigateTo, 5000);
                    // navigate("/products")
                  
                    
                  }
                  else{

                    toast.error("product not Added !", {
                      position: "top-center"
                    });
                  }
                  setTimeout(
                    () => navigate("/products"), 
                    55000
                  );
                // console.log(res);
            });
 
    
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
              <TextField sx={{ width: "36vw", marginTop: "10px" }}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Grid>

            <Grid item xs={6} md={8}  >
              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Description</Typography>
              <TextField className="text-fielD" sx={{
                marginTop: "10px",
                width: "36vw",
                "& .MuiFilledInput-root": {
                  height: "282px"

                }
              }}

                onChange={(e) => setDescription(e.target.value)}
              />

            </Grid>
            <Grid item xs={6} md={8} >

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Category</Typography>
              <TextField sx={{ width: "36vw", marginTop: "10px" }}

                onChange={(e) => setCategory(e.target.value)}
              />

            </Grid>
            <Grid item col-0 md={10} >

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Brand Name</Typography>
              <TextField sx={{ width: "36vw", marginTop: "10px" }}

                onChange={(e) => setBrandName(e.target.value)}
              />

            </Grid>
            <Grid item xs={4} md={5} >
              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>SKU</Typography>
              <TextField sx={{ width: "16vw", marginTop: "10px" }}
                onChange={(e) => setSku(e.target.value)}

              />
            </Grid>
            <Grid item xs={4} md={5}>

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Stock Quantity</Typography>
              <TextField sx={{ width: "15vw", marginTop: "10px" }}
                onChange={(e) => setQuantity(e.target.value)}

              />

            </Grid>
            <Grid item xs={4} md={5}>

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>  Regular Price</Typography>
              <TextField sx={{ width: "16vw", marginTop: "10px" }}
                onChange={(e) => setRegularPrice(e.target.value)}
              />

            </Grid>
            <Grid item xs={6} md={5}>

              <Typography fontSize={"20px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}> Sale Price</Typography>
              <TextField sx={{ width: "15vw", marginTop: "10px" }}
                onChange={(e) => setSalePrice(e.target.value)}

              />


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
                <Box marginTop={"150px"}>
                  <Button color="primary" onClick={handleSubmit}
                    sx={{
                      width: "100px", bgcolor: "#1C64F2", color: "white", "&:hover": {
                        backgroundColor: "#004182",
                      },
                      "&:focus-within": {
                        outline: "1px solid #0A66C2",
                        backgroundColor: "#004182",
                      }
                    }}>
                    Add
                  </Button>
                  {/* <Button>{props.btn1}</Button>
                  <Button>{props.btn2}</Button>
                  <Button>{props.btn3}</Button> */}
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Stack>
        <ToastContainer autoClose={1000}/>

      </Stack>
    </Box>
  );
}