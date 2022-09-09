import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import logo from '../logo.png'
import { useDispatch } from 'react-redux';
import { addSalle } from '../../redux/actions/salleAction';
import { useNavigate } from 'react-router-dom';
export default function AddSalle() {
    const dispatch = useDispatch();
    const [name,setName]=React.useState("")
    const [desc,setDesc]=React.useState("")
    const [lieu,setLieu]=React.useState("")
    const [pic,setPic]=React.useState("")
    const Navigate = useNavigate();
  return (
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",marginTop:"120px",borderRadius:"5px",paddingBottom:"40px"}}
    >
        <img src={logo} alt="logo"/>
      <TextField id="filled-basic" label="name" variant="filled" onChange={(e)=>setName(e.target.value)} value={name} />
      <TextField id="filled-basic" label="desc" variant="filled" onChange={(e)=>setDesc(e.target.value)} value={desc} />
      <TextField id="filled-basic" label="lieu" variant="filled" onChange={(e)=>setLieu(e.target.value)} value={lieu} />
      <TextField id="filled-basic" label="photo" variant="filled" onChange={(e)=>setPic(e.target.value)} value={pic} />
      <Button style={{backgroundColor:"#001f3f",color:"white"}} onClick={()=>dispatch(addSalle({name,desc,lieu,pic},Navigate))}>New Salle</Button>
    </Box>
    
  );
}