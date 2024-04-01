import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import Tags from '../../../../../atom/tags';
import TypographyText from '../../../../../components/Typography';
import DragAndDrap from '../../../../../components/DragAnd Drop';
import BasicBreadcrumbs from '../../../../../components/Breadcrumbs'
import { useAppDispatch } from '../../../../../app/hooks';
import { registerProduct } from '../../../../../feature/Products/productAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import MuiImageSlider from 'mui-image-slider';
import CloseIcon from '@mui/icons-material/Close';
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
  // const handleChange = (file: any) => {
  //   setFile(file);
  //   console.log('file: ', file);
  // };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brandName, setBrandName] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);



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
  // const navigateTo =()=>{
  //   navigate("/products")
  // }
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("frontend", data);
    dispatch(registerProduct(data))
      .unwrap()
      .then((res) => {
        console.log(res, "❤️❤️❤️❤️")
        if (res.status == 201) {
          console.log(res.data)
          // toast.success("Product Added!", {
          //   position: "top-center"
          // });


          toast.success("Product Added!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });


          //  setTimeout(navigateTo, 5000);
          // setTimeout(function(){ navigate("/products")}, 2000);
          // setTimeout(navigateTo, 5000);
          // navigate("/products")


        }
        else {

          toast.error("product not Added !", {
            position: "top-center"
          });
        }
        // setTimeout(
        //   () => navigate("/products"), 
        //   55000
        // );
        // console.log(res);
      });


  };

  const handleChange = (file: File[]) => {
    const arrayfile = Array.from(file);
    console.log('filessssssss: ', file);
    console.log('arrayfile: ', arrayfile);

    const urls = arrayfile.map(a => {
      console.log(a, "hbk")
      return URL.createObjectURL(a)
    });
    setImageUrls((prev) => [...prev, ...urls]);
    console.log('urls: ', imageUrls);

  };

  const deleteImg = (index: number) => {
    console.log("first", index)
    setImageUrls((prev) =>
      prev.filter((_, i) => i !== index)
    )
  }
  const handleCancle = () => {
    navigate(-1)
  }

  return (
    <Box>

      {/* <TypographyText   text1='Add Product' text2= <BasicBreadcrumbs/> /> */}

      <Stack flexDirection={"row"} sx={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "80vh", width: "78vw", marginLeft: "15px", margin: "10px", paddingBottom: "15px"
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
                <Stack flexWrap={'wrap'} direction={'row'} gap={2}>
                  {imageUrls?.map((a, index) => (
                    <Box key={index} className="image" sx={{ width: '80px', height: '80px', position: 'relative' }}>
                      {/* <MuiImageSlider images={imageUrls}/> */}
                      <img src={a} alt="" style={{ borderRadius: "20px", position: 'absolute', bottom: '255px', left: '11px', width: "350px", height: "325px" }} />
                      <IconButton onClick={() => {
                        deleteImg(index)
                      }} sx={{ position: 'absolute', bottom: '555px', left: '11px', top: '0px', right: '5px', height: '15px', width: '15px', color: 'black' }}><CloseIcon sx={{ position: 'absolute', bottom: '500px', right: '16px', height: '25px', width: '25px' }} /></IconButton>
                    </Box>
                  ))}
                </Stack>

                <Stack direction={"row"} marginTop={"100px"} gap={"10px"}>
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
                  <Button color="primary" onClick={handleCancle}
                    sx={{
                      width: "100px", bgcolor: "white", color: "black", border: "1px solid black", "&:hover": {
                        backgroundColor: "white",
                      },
                      "&:focus-within": {
                        outline: "1px solid black",
                        backgroundColor: "#004182",
                      }
                    }}>
                    Cancel
                  </Button>
                  {/* <Button>{props.btn1}</Button>
                  <Button>{props.btn2}</Button>
                  <Button>{props.btn3}</Button> */}
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Stack>
        <ToastContainer autoClose={1000} />

      </Stack>
    </Box>
  );
}