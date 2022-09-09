import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import {useState} from 'react'
import { register } from '../redux/actions/authAction';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
     
        Your Website
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function SignUp() {
  
  const dispatch = useDispatch();
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [cin,setCin]=useState("");
 const [password,setPassword]=useState("");
 const [pic,setPic]=useState("");
 const Navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",width:"400px",padding:"15px", marginTop:"35px"}}>
        <CssBaseline />
        <Box
          sx={{
           
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="FullName"
                  required
                  fullWidth
                  id="FullName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>{setName(e.target.value)}}
                  value={name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="CIN"
                  label="CIN"
                  name="CIN"
                  autoComplete="CIN"
                  onChange={(e)=>setCin(e.target.value)}
                  value={cin}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="picture"
                  label="Picture"
                  name="picture"
                  autoComplete="picture"
                  onChange={(e)=>setPic(e.target.value)}
                  value={pic}
                />
                
              </Grid>
              <Grid item xs={12} style={{margin:"8px",marginLeft:"30px"}}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
           <Link to="/Profile"> <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{height:"50px",backgroundColor:"#001f3f"}}
              onClick={(e)=>{e.preventDefault();dispatch(register({name,cin,email,password,pic},Navigate))}}
            >
              Sign Up
            </Button>
            </Link>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/signIn">
                  Already have an account? Sign in
                  </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} style={{marginTop:"10px"}} />
      </Container>
      
    </ThemeProvider>
  );
}
export default SignUp;