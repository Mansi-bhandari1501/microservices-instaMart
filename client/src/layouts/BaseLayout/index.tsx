import React from 'react'
import SlideBar from '../SlidebarLayout'
import Header from '../HeaderLayout'
import { Box, Stack } from '@mui/material'

const BaseLayout = () => {
  return (
    <Box sx={{backgroundColor:"#F6F8FF"}}>

    <Stack flexDirection={'row'} gap={'3px'}>
      <SlideBar/>
      <Header/>
    </Stack>
    </Box>
  )
}

export default BaseLayout
