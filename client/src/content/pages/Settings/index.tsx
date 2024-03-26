import React from 'react'
import Typographys from '../../../components/Typography'
import { Stack } from '@mui/material'
import SettingsPage from './settingsLeftSide'

const Settings = () => {
  return (
    <Stack>
      <Typographys text1='Setting' text2='Manage your account settings'/>
      <SettingsPage/>
    </Stack>
  )
}

export default Settings
