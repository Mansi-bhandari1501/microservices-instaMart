import {
    Box,
    FormControl,
    InputLabel,
    Paper,
    Select,
    Stack,
    Typography,
    SelectChangeEvent,
    MenuItem,
    InputBase,
    Button,
  } from "@mui/material";
  import React, { useState } from "react";
//   import CustomButton from "../../components/Button/CustomButton";
  import LoginImg from "../../../asserts/images/Login.png" 
import { useAppDispatch } from "../../../app/hooks";
import { loginUser } from "../../../feature/Auth/authAction";
import { useNavigate } from "react-router-dom";

  


  const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [role, setRole] = React.useState("");
  
    const handleChange = (event: SelectChangeEvent) => {
      setRole(event.target.value as string);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const data = {
      email:email,
      password:password,

    }
    console.log(email,password,"🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️")
    const handleSubmit = async (e :React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log("frontend", email, password);
      dispatch(loginUser(data ))
          .unwrap()
          .then((res) => {
              if (res.status == 200) {
                  console.log(res.data.user._id)
                  localStorage.setItem("auth", JSON.stringify(res.data));
                  // navigate(location.state || "/");
                  navigate('/products');
              }
              console.log(res);
          });
  };
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f9fafb",
        }}
      >
        <Paper
          sx={{
            width: "55vw",
            height: "532px",
            display: "flex",
            alignItems: "center",
            p: 3,
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={LoginImg}
              alt="LoginPage"
              width={"90%"}
            />
          </Box>
          <Stack
            width={"50%"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 4 }}>
              Sign In
            </Typography>
  
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 1 }}>
              Your Email
            </Typography>
            <InputBase
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                border: "1px solid #e5e7eb",
                bgcolor: "#faf9fb",
                width: "90%",
                borderRadius: "10px",
                p: "5px 10px",
                mb: 3,
              }}
            />
  
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 1 }}>
              Password
            </Typography>
            <InputBase
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                border: "1px solid #e5e7eb",
                bgcolor: "#faf9fb",
                width: "90%",
                borderRadius: "10px",
                p: "5px 10px",
                mb: 3,
              }}
            />
  
            <Button
              onClick={(e) => {handleSubmit(e)}}
              color="primary"
              variant="contained"
              sx={{
                textTransform: "none",
                width: "90%",
                height:"50px",
                borderRadius: "10px",
                fontSize: "16px",
                boxShadow: "none",
                mb: 4,
              }}
            >
              Sign In
            </Button>
          </Stack>
        </Paper>
      </Box>
    );
  };
  
  export default Login;