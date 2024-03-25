import { Stack, Typography } from '@mui/material'
import React from 'react'

type TypoProps ={
    text1: any,
    text2: any,
}

const TypographyText = (props: TypoProps) => {
  return (
 <Stack marginTop={"10px"} marginLeft={"20px"}>
 <Typography> {props.text1}</Typography>
 <Typography> {props.text2}</Typography>
 </Stack>
  )
}

export default TypographyText;