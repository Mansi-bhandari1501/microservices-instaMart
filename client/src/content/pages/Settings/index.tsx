// import React from 'react'
// import Typographys from '../../../components/Typography'
// import { Stack } from '@mui/material'
// import SettingsPage from './settingsLeftSide'

// const Settings = () => {
//   return (
//     <Stack>
//       <Typographys text1='Setting' text2='Manage your account settings'/>
//       <SettingsPage/>
//     </Stack>
//   )
// }

// export default Settings
import { Stack, Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, TextField } from '@mui/material'
import React from 'react'
import SettingsHeader from './settingHeading'
import SettingsLeft from './settingsLeftSide'
// import TypographyText from '../../components/TypographyText'
// import CustomButton from '../../../components/CustomButton'
import PersonalInfo from './personalInfo'

function Settings() {
    return (
        <Stack p={4} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} height={'100%'}>
            <SettingsHeader />
            <Stack direction={'row'} sx={{ backgroundColor: 'white', borderRadius: '15px' }}p={4} marginTop={2.5}>
                <SettingsLeft />
                <Divider orientation='vertical' />
                <PersonalInfo />
            </Stack>
        </Stack>
    )
}

export default Settings
