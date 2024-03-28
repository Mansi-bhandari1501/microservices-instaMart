import { Box, Button, InputBase, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Maintain from "../../../asserts/images/maintainence.png";

import Arrow from '@mui/icons-material/ArrowBackIos';
import { useLocation, useNavigate } from 'react-router-dom';

type pageProps = {
    image: any,
    Heading: string,
    subheading: string,
    
}

const ErrorPage = (props: pageProps) => {
    const navigate = useNavigate();
    // const location = useLocation();
    const handleClick = async () => {
        console.log("GO TO HOME")
        // navigate(location.state || "/");
        navigate('/');
    }
    return (
        <Stack sx={{ bgcolor: "#F9FAFB", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <img style={{ width: "800px", height: "600px" }} src={props.image} alt='' />
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "55px", color: "rgba(0,0,0,0.898)", fontWeight: 600, lineHeight: "80px" }}>{props.Heading}</Typography>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "20px", color: "rgba(0,0,0,0.578)", fontWeight: 510, lineHeight: "56px" }}> {props.subheading} </Typography>
            <Button sx={{
                bgcolor: "#1C64F2",
                color: "white",
                padding: "12px",
                borderRadius: "15px",
                textTransform: "none",
                fontSize:"16px",
                width:"100px",
                "&:hover": {
                    backgroundColor: "#004182",
                }
            }}
                startIcon={<Arrow sx={{ height: "12px" }}
                    onClick={handleClick} />}>
                Go back to home  
            </Button>
        </Stack>
    )
}

export default ErrorPage
