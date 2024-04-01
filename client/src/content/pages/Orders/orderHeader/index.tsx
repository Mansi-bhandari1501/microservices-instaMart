import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import BasicBreadcrumbs from '../../../../components/Breadcrumbs'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import HeaderBreadcrumb from '../../../../components/Breadcrumbs';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
// import CustomCalender from '../../../../atom/calender';

    const OrderHeader = () => {
    const [status, setStatus] = React.useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };
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
   

    <Box className="orderHeading" marginTop={0} padding={0}>
      {/* <Typography margin={"20px"} marginBottom={"5px"} fontSize={"24px"} fontWeight={"600"} fontFamily={"Rubik"} lineHeight={"23.7px"}>Orders</Typography> */}
    <Stack direction={"row"} justifyContent={"space-between"} width={"80vw"}>
    <HeaderBreadcrumb textStyles={{sx:{height:'30px' , width:'183px',margin:"20px",marginBottom:"0px"}, fontSize:"24px", fontWeight:"600", lineHeight:"28.44px"}} text={'Order List'} breadcrumb = {[{text: 'Home', link : '/'}]}/>      {/* <BasicBreadcrumbs tag1={""} tag2={"Home"} tag3={"OrderList"}/> */}
     <Box marginTop={"40px"} marginRight={"60px"}>{todayDateString}
   {/* <CustomCalender/> */}
        </Box> 
    </Stack>
    <Stack width={"100%"} flexDirection={'row'} justifyContent={'right'}>
    <Box sx={{ minWidth: 240, width:"100px", mr: '50px'  }}>
    <FormControl  sx={{ mb: 1, width: '200px' }}>
        <InputLabel  sx={{color:"black",}}>Change Status</InputLabel>
        <Select
          value={ status}
          variant='outlined'
          onChange={handleChange}
          label="Change Status"
          sx={{
            bgcolor: '#fff',
            
          }}
          // sx={{
          //   // border: '1px solid ',
          //   // size: 'small',

          //   // '& .MuiFilledInput-underline:after': {
          //   //   backgroundColor:'white',
          //   //   borderBottom: 'none',
          //   // }, borderRadius: '8px', width: '100%'
          //   backgroundColor: "white",
          //   color:"black",
          //   "& .MuiFilledInput-underline:after": {
          //       display: "none",
          //       backgroundColor: "white",
          //   },
          //   "& .MuiFilledInput-underline:before": {
          //       display: "none",
          //       backgroundColor: "white",
          //   },
          //   "& .MuiFilledInput-root": {
          //       background: "white",
          //   },
          //   "&:focus-within": {
          //       background: "none",
          //       outline: "1px solid #0A66C2",
          //   },
          //   borderRadius: "4px",
          //   overflow: "hidden",
          //   outline: "1px solid grey",
          //   // backgroundColor:"transparent"
        // }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>pending</MenuItem>
          <MenuItem value={20}>placed</MenuItem>
          <MenuItem value={30}>fulfilled</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </Stack>
    </Box>

  )
}

export default OrderHeader
