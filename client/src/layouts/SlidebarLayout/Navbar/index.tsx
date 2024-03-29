import { Avatar, Box, IconButton, InputAdornment, InputBase, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/SearchRounded';
import calender from "../../../asserts/images/calender.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
    var today = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayIndex = today.getDay();
    var dayName = weekdays[dayIndex];
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var Month
    Month = month < 10 ? '0' + month : month;
    var year = today.getFullYear();
    var todayDateString = dayName + ", " + date + "/" + Month + "/" + year;
    return (
        <Box sx={{ backgroundColor: "white", height: "7vh", width: "81.7vw", }}>

            <Stack flexDirection={'row'} sx={{ marginTop: "10px", justifyContent: "space-around" }}>
                {/* <Stack  flexDirection={'row'} sx={{gap:"",justifyContent:"space-around"}}> */}


                <Box sx={{ backgroundColor: 'rgb(247, 247, 247)', maxWidth: '400px', width: '40%', height: "44px", borderRadius: '12px' }}>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, width: '70%' }}
                    placeholder="Search...."
                    inputProps={{ 'aria-label': 'search....' }}
                />
            </Box>
                
                <Stack flexDirection={'row'} gap={'3vw'}>
                    <Stack flexDirection={'row'} gap={'10px'} marginTop={'10px'}>

                        <Typography ><img src={calender} alt='' style={{ height: "15px", width: "15px" }} />  {todayDateString}</Typography>
                         {/* <CalendarMonthOutlinedIcon sx={{ fontSize: '25px' }} />
                    <TypographyText text={todayDateString} fontSize={'15'} fontWeight={'600'} /> */}
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
