import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import styles from './Ad.module.css'
import Carousel from 'react-material-ui-carousel'
import Carousel2 from '../../../asserts/images/CAROUSEL2.png'
import Carousel3 from '../../../asserts/images/Frame.png'
// import { Paper, Button } from '@mui/material'

const Advertisement = () => {
  return (
    <Box className={styles.advert}>
        
        <Carousel autoPlay className={styles.carousel} >
            {/* map */}
                <Stack>

                <img src={Carousel2} alt='' />  
                
                </Stack>

                <Stack>

                <img src={Carousel3}  alt=''/>  
                
                </Stack>
         
        </Carousel>
    </Box>
  )
}

export default Advertisement

