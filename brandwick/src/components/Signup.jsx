import { useEffect, useState,useRef} from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const initialState={
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}


const Signup = () => {
  const [formData, setFormData] = useState(initialState);
  const [emailExists, setEmailExists]= useState(false);
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('check k form data submitted:', formData);
    try {
        if(formData){
            let response= await axios.post(`https://jwt-brand-wick.onrender.com/users/signup`, formData)
            console.log(response.data);
           
        }
        setFormData(initialState);
    } catch (error) {
        console.log(error);
        // alert(error.response.data.message)
        setEmailExists(true);
        inputRef.current.focus();
    }
    
  };

 

  


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 3 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
         <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            onChange={handleChange}
            value={formData.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            helperText= {emailExists?("Email already exists"):null}
            color={emailExists? 'warning' :null}
            ref={inputRef}
          />
          {/* {emailExists? (<TextField size='small' id="standard-basic" label="Email already Registered" variant="standard"/>):null} */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            value={formData.password}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            onChange={handleChange}
            value={formData.phone}

          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
