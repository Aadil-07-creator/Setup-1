import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import {Stack} from '@mui/material'
import {Typography} from '@mui/material';
import Alert from '@mui/material/Alert';



function Ui() {
    const [open,setOpen]= React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event,reason) => {
    if (reason === 'clickaway') {
      return;
  }
    setOpen(false)
  };
  return (
    <Box 
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh" 
    >
    <Stack
      spacing={2} 
      alignItems="center"
      >
      <Typography variant="h4" component="h4">Add products</Typography>
      <TextField label=" Enter Id" />
      <TextField label="Enter Data" />
      <Button variant="contained" onClick={handleClick}>Contained</Button>
      {open && (
      <Alert  severity="success" onClose={handleClose}  autoHideDuration={6000}  >This is a success Alert.</Alert>
      )}

    </Stack>
  </Box>

      
    
  
      
  
  );
}

export default Ui