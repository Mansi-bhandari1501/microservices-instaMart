import { Avatar, Box, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/SearchRounded';
import calender from "../../asserts/images/calender.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
    return (
        <Box sx={{ backgroundColor: "white", height: "70px", width: "98vw", }}>

            <Stack flexDirection={'row'} sx={{ marginTop: "10px", justifyContent: "space-around" }}>
                {/* <Stack  flexDirection={'row'} sx={{gap:"",justifyContent:"space-around"}}> */}


                <TextField className='search-bar' placeholder='Search...'
                    sx={{
                        marginTop:"5px",
                        Width: '380px',
                        height: '34px',
                        
                        "& .MuiOutlinedInput-root": {
                            height: "34px",
                            width: "20vw",
                            border: "1px solid white"
                        },
                        "&.MuiInputBase-input-MuiOutlinedInput-input": {
                            padding: "0px"
                        }

                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" >
                                <SearchIcon style={{ color: 'black' }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <Stack flexDirection={'row'} gap={'3vw'}>
                    <Stack flexDirection={'row'} gap={'10px'} marginTop={'10px'}>

                        <Typography ><img src={calender} alt='' style={{ height: "15px", width: "15px" }} />  Monday, 4th September</Typography>
                        <NotificationsIcon />
                    </Stack>
                    <Stack flexDirection={'row'} gap={'15px'} marginTop={'5px'}>
                        <Stack >
                            <Typography  sx={{fontSize:"15px", fontFamily:"inter,sans-serif",color:"#000000e5"}}>Mark Collins</Typography>
                            <Typography sx={{fontSize:"9px", fontFamily:"inter,sans-serif",color:"#000000e5"}}>Business man</Typography>
                        </Stack>
                        <Avatar />
                    </Stack>
                </Stack>
                {/* </Stack> */}
            </Stack>
        </Box>

    )
}

export default Header
