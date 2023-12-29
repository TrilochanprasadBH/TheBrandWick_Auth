import  { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin =async () => {
    console.log('Email:', email);
    console.log('Password:', password);
    let payload={
        email,
        password
    }
    try {
        let response= await axios.post(`https://jwt-brand-wick.onrender.com/users/login`,payload);
        console.log(response);
        setEmail("");
        setPassword("");
       } catch (error) {
        console.log(error);
       }
    
  };

  return (
    <form>
         <Typography component="h1" variant="h5">
          Login 
        </Typography>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </form>
  );
};

export default Login;
