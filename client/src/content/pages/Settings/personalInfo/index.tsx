import { Avatar, Box, Divider, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
// import TypographyText from '../../../components/TypographyText'
import CustomButton from '../../../../components/CustomButton'

function PersonalInfo() {
    return (
        <Stack p={3} width={'100%'}>
            <Stack marginBottom={1}>
                <Typography fontSize={'24px'} fontWeight={'600'} >General Information </Typography >
                <Typography fontSize={'14px'} fontWeight={''} >This is my information</Typography >
            </Stack>
            <Divider />
            <Stack gap={1} my={2}>
                <Typography fontSize={'20px'} fontWeight={'600'} >Profile Picture</Typography >
                <Stack direction='row' alignItems={'flex-end'} gap={3} >
                    <Stack direction='row' alignItems={'center'} gap={1}>
                        <Avatar sx={{ width: '64px', height: '64px' }} />
                        <Stack>
                            <Typography fontSize={'14px'} fontWeight={'600'} >Mansi Bhandari</Typography >
                            <Typography fontSize={'12px'} fontWeight={''} >Role/Title</Typography >
                            <Typography fontSize={'12px'} fontWeight={''} >Location</Typography >
                        </Stack>
                    </Stack>
                    <CustomButton sxprops={{ sx: { width: '100px', height: '37px' } }} variant={'contained'} text={'Change'} onclick={function (): void {
                        throw new Error('Function not implemented.')
                    }} />
                    <CustomButton sxprops={{ sx: { width: '100px', height: '37px' } }} variant={'outlined'} text={'Delete'} onclick={function (): void {
                        throw new Error('Function not implemented.')
                    }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={7} flexWrap={'wrap'}>
                <Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'} >UserName</Typography >
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'} >Phone Number</Typography >
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'} >Address</Typography >
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'} >City</Typography >
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                </Box>
                <Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'} >Fax</Typography >
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography fontSize={'16px'} fontWeight={'600'} >Country</Typography >
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1} >
                        <Typography fontSize={'16px'} fontWeight={'600'} >State</Typography >
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                    <Box my={1}>
                        <Typography  fontSize={'16px'} fontWeight={'600'} >Email address</Typography >
                        <TextField sx={{ width: '300px' }} id="outlined-basic" variant="outlined" />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    )
}

export default PersonalInfo