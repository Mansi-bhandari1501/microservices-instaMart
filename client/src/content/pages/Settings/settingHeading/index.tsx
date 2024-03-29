import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
// import TypographyText from '../../../components/TypographyText'

function SettingsHeader() {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack gap={1}>
                <Box sx={{ fontSize: '42px', fontWeight: '600' }}>Settings</Box>
                <Typography  fontSize={'18px'} fontWeight={''} > Manage your account settings</Typography>
            </Stack>
            <Stack direction={'row'} gap={3}>
                <CustomButton sxprops={{ sx: { width: '160px', height: '48px' } }} variant="contained" text="Save changes" onclick={function (): void {
                    throw new Error('Function not implemented.')
                } } />
                <CustomButton sxprops={{ sx: { width: '160px', height: '48px' } }} variant="outlined" text="Cancel" onclick={function (): void {
                    throw new Error('Function not implemented.')
                } } />
            </Stack>
        </Stack>
    )
}

export default SettingsHeader