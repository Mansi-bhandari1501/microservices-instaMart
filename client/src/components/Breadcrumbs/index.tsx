
// import * as React from 'react';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import Stack from '@mui/material/Stack';
// import { Navigate, useHref } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// type TagsProps ={
//   tag1:any,
//   tag2:any,
//   tag3:any,
// }


// function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
//   // let navigate = useNavigate();
//   // let path = {}; 
//   // navigate(path);
// }

// export default function BasicBreadcrumbs(props:TagsProps) {
//   const breadcrumbs = [
//     <Link underline="hover" 
//     key="1" 
//     color="inherit" 
//     href="/{props.tag1}" 
//     onClick={handleClick}>
//       {props.tag1}
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="inherit"
//       href="/products"
//       onClick={handleClick}
//     >
//       {props.tag2}
//     </Link>,
//     <Typography key="3" color="text.primary">
//       {props.tag3}
//     </Typography>,
//   ];

//   return (
//     <Stack marginLeft={"20px"} spacing={2}>
//       <Breadcrumbs separator="›" aria-label="breadcrumb">
//         {breadcrumbs}
//       </Breadcrumbs>
     
  
//     </Stack>
//   );
// }
import { Box, Typography, TypographyProps } from '@mui/material'
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';


interface linkDetails {
    text: string,
    link: string,
}

interface HeaderBreadcrumbProps {
    text: string,
    textStyles: TypographyProps,
    breadcrumb: linkDetails[]
}

function HeaderBreadcrumb(props: HeaderBreadcrumbProps) {
    
    return (
        <Box>
            <Typography {...props.textStyles}>{props.text}</Typography>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb" style={{marginLeft:"20px"}}>
                    {props.breadcrumb && props.breadcrumb.length > 0 && props.breadcrumb.map((bread)=> {
                        return (
                            <Link to={bread.link} style={{fontSize:"16px", fontWeight:"600",textTransform:"none"}}>
                             {bread.text}
                            </Link>
                        )
                    })}
                    <Typography  fontSize="16px" fontWeight="600">{props.text}</Typography>
                </Breadcrumbs>
            </div>
        </Box>

    )
}

export default HeaderBreadcrumb