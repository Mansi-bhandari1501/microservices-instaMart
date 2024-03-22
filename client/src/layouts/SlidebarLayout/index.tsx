import React from 'react'
import SlideBar from '../SlidebarLayout/SlidebarMenu'
import Header from '../SlidebarLayout/Navbar'
import { Box, Stack } from '@mui/material'
import Settings from '../../content/pages/Settings'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  return (
    <Box sx={{backgroundColor:"#F6F8FF"}}>

    <Stack flexDirection={'row'} gap={'3px'}>
      <SlideBar/>
      <Stack>

      <Header/>
      <Outlet/>
      </Stack>
    </Stack>
    </Box>
  )
}

export default BaseLayout
