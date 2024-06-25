import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import React, { useState,useEffect } from 'react';
import axios from 'axios'

function Ui() {
  const [data, setData] = useState({
    id: '',
    name: '',
  });
  const { id, name } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
    
  };

  const [error, setError] = useState(null);


  const submitHandler =async() => {
    if (!id || !name) {
      setError('Please enter both ID and name');
     setOpen(true)
      return;
    }
    
    axios.post('http://localhost:5000/addproducts',data).then(
      () =>{
        alert('data reached')
      setData({...data,name:'',id:''})
      }
    ).catch(err => console.log(err))
    //console.log(data);
  };
 

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    submitHandler();
    if (id && name) {
      setOpen(true);
    } else {
      setOpen(false);
      
    }
     
  };

  useEffect(() => {
    if (error || open) {
      setTimeout(() => {
        setError(null);
        setOpen(false);
      }, 2000);
    }
  }, [error, open]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4" component="h4">
          Add products
        </Typography>
        <TextField label="Enter Id" value={id} onChange={onChange} id="id" />
        <TextField label="Enter Data" value={name} onChange={onChange} id="name" />
        {error && (
          <Alert severity="error">{error}</Alert>)}
        <Button variant="contained" onClick={handleClick}>
          Contained
        </Button>
        {open && (
          <Alert severity="success">This is a success Alert</Alert>
        )}
      </Stack>
    </Box>
  );
}

export default Ui;