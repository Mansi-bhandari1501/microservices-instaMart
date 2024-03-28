import { Box, FormControl, InputLabel, Paper, Select, Stack, Typography, SelectChangeEvent, MenuItem, InputBase, Button } from '@mui/material'
import React, { useState } from 'react'
// import CustomButton from '../../components/Button/CustomButton';
import SignUpImg from "../../../asserts/images/Signup.png"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../feature/Auth/authAction';
import { useAppDispatch } from '../../../app/hooks';
const SignupPage = () => {

    const [role, setRole] = React.useState('');

    const dispatch = useAppDispatch();
    // const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const data = {
      email:email,
      password:password,
      role:role
    }
    console.log(data)
    const handleChange = (event: SelectChangeEvent) => {
      setRole(event.target.value as string);
    };
// const [phone,setPhone] =  useState("")
const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

// const handleMouseDownPassword = (event) => {
// event.preventDefault();
// };
//   const { } = useSelector(
//     (state) => state.user
//   );
const navigate = useNavigate();
// form function
const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
e.preventDefault();
console.log(email,password)
dispatch(registerUser(data))
.unwrap()
  .then((res:any) => {
    console.log(res,"ghgrhtrh");
    console.log("hello");
    console.log(res.status)
    if (res.status === 200 || res.status === 201) {
      navigate("/login");
    }
  })
  .catch((err:any) => {
    console.log(err,"reth")
    alert(err);
    console.log("error");
    console.log("err", err);
  });
};

  return (
    <Box sx={{width: '100%', height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#f9fafb'}}>

      <Paper sx={{width: '55vw', height: '590px', display: 'flex', alignItems: 'center', p: 3}} >
        <Box sx={{width: '50%', display: 'flex', alignItems: 'center', justifyContent:"center"}}>
        <img src={SignUpImg} alt='SignupPage' width={"90%"} />

        </Box>
        <Stack width={'50%'} alignItems={'flex-start'} justifyContent={'center'} >
            <Typography sx={{fontSize: '20px', fontWeight: 'bold', mb: 4}}>Create your Free Account</Typography>
            <FormControl sx={{mb: 3, width: '90%'}}>
        

        <InputLabel><Typography sx={{fontSize: '16px', fontWeight: 'bold'}}>Select your role</Typography></InputLabel>
        <Select
          id="demo-simple-select"
          placeholder='Role'
          value={role}
          label={"Select Your Role"}
          onChange={handleChange}
          sx={{
            bgcolor: '#faf9fb'
          }}
        >
          <MenuItem value={"user"}>User</MenuItem>
          <MenuItem value={"vendor"}>Vendor</MenuItem>
        </Select>
      </FormControl>
    
      <Typography sx={{fontSize: '16px', fontWeight: 'bold', mb: 1}}>Your Email</Typography>
        <InputBase 
            placeholder='Email'
            type='email'
            sx={{
                border: '1px solid #e5e7eb',
                bgcolor: '#faf9fb',
                width: '90%',
                borderRadius: '10px',
                p: '5px 10px',
                mb: 3
            }}
            onChange={(e) => setEmail(e.target.value)}


        />

<Typography sx={{fontSize: '16px', fontWeight: 'bold', mb: 1}}>Password</Typography>
        <InputBase 
            placeholder='Password'
            type='password'
            sx={{
                border: '1px solid #e5e7eb',
                bgcolor: '#faf9fb',
                width: '90%',
                borderRadius: '10px',
                p: '5px 10px',
                mb: 3
            }}
            onChange={(e) => setPassword(e.target.value)}


        />

<Typography sx={{fontSize: '16px', fontWeight: 'bold', mb: 1}}>Confirm Password</Typography>
        <InputBase 
            placeholder='Confirm Password'
            type='password'
            sx={{
                border: '1px solid #e5e7eb',
                bgcolor: '#faf9fb',
                width: '90%',
                borderRadius: '10px',
                p: '5px 10px',
                mb: 3
            }}

        />
        
            <Button onClick={(e) => {handleSubmit(e)}} color='primary' variant='contained' sx={{textTransform: 'none',borderRadius: '10px',fontSize: '16px', width: '90%', fontWeight: '500', boxShadow: 'none', mb: 4}}>Create Account</Button>
        
        </Stack>
      </Paper>
    </Box>
  )
}

export default SignupPage