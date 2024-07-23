
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography,Button } from '@mui/material';
import { useRef } from 'react';

export default function BasicTextFields() {
    let name=useRef(null)
    let email=useRef(null)
    let password=useRef(null)
    const handleSubmit=(e)=>{
        e.preventDefault();
    
    
    if(name.current.value && password.current.value){
        console.log(name.current.value)
        console.log(email.current.value)
        console.log(password.current.value)
    }
    else{
    console.log("Error")
    }
}
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"column",
        width:'100%',
        height:'100vh'
      }}
      noValidate
      autoComplete="off"
    >
        <Typography sx={{textAlign:'center'}} variant='h4'>LOGIN</Typography>
        <Box>
      <TextField inputRef={name} id="outlined-basic" label="Name" variant="outlined" />
      <Typography  color={"red"} fontSize={"10px"}>Fill the name </Typography>
      </Box>
      <Box>
      <TextField inputRef={email} id="filled-basic" label="Email" variant="filled" />
      <Typography  color={"red"} fontSize={"10px"}>Fill the Email </Typography>
      </Box>
      <TextField inputRef={password} id="standard-basic" type="password" label="Password" variant="standard" />
    <Typography  color={"red"} fontSize={"10px"}>Fill the password </Typography>
    <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
    </Box>
  );
}