import { Stack, Typography } from '@mui/material'
import React from 'react'

type TypoProps ={
    text1: any,
    text2: any,
}

const TypographyText = (props: TypoProps) => {
  return (
 <Stack>
 <Typography> {props.text1}</Typography>
 <Typography> {props.text2}</Typography>
 </Stack>
  )
}

export default TypographyText
