import { Stack, Typography } from '@mui/material'
import React from 'react'

type TypoProps ={
    text1: string,
    text2: string,
}

const Typographys = (props: TypoProps) => {
  return (
 <Stack>
 <Typography> {props.text1}</Typography>
 <Typography> {props.text1}</Typography>
 </Stack>
  )
}

export default Typographys
