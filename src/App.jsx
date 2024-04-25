import React, { useState } from 'react';
import './App.css'
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Box,
  Container,
  FormControl,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Modal,
  Typography,
} from '@mui/material';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');
  const [open, setOpen] = React.useState(false);
  const [formFields, setFormFields] = React.useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = () => {
    if (
   !formFields.name ||
   !formFields.address ||
   !formFields.mobile ||
   !formFields.email ||
   !formFields.gender ||
   !formFields.dob ||
   !formFields.course
    ) {
      alert('Please fill in all fields.');
      return;
    }
    if (!validateName(formFields.name)) {
      alert('Please enter a valid name.');
      return;
    }

    if (!validateEmail(formFields.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validateMobile(formFields.mobile)) {
      alert('Please enter a valid mobile number.');
      return;
    }

    handleOpen();
  };

  const handleCancel = () => {
    setFormFields({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
  };

  const handleEdit = () => {
    setFormFields({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    handleClose();
  };
  const handleOK = () => {
    setFormFields({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    handleClose();
  };

  const validateName = (name) => {
    const re = /^[A-Za-z\s.]*$/
    return re.test(String(name));
  }

 const validateEmail =(email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateMobile = (mobile) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(mobile));
  };

  return (
    <>
      <div className='header'>
        <h1 style={{textAlign:'center'}}>STUDENT-REGISTRATION-FORM</h1>
      </div>
      <div className='maindiv' style={{ backgroundImage: `url(${"https://static.vecteezy.com/system/resources/previews/001/937/665/original/online-education-application-learning-worldwide-on-computer-mobile-website-background-social-distance-concept-the-classroom-training-course-library-illustration-flat-vector.jpg"})`, backgroundSize: "cover",display:'flex'}} >
        <Container className='boxcontainer' maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 5
            }}
          >
            <TextField
              label="Name"
              value={formFields.name}
              onChange={(e) => setFormFields({...formFields, name: e.target.value })}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Address"
              value={formFields.address}
              onChange={(e) => setFormFields({...formFields, address: e.target.value })}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Mobile"
              value={formFields.mobile}
              onChange={(e) => setFormFields({...formFields, mobile: e.target.value })}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              value={formFields.email}
              onChange={(e) => setFormFields({...formFields, email: e.target.value })}
              fullWidth
              margin="normal"
              required
            />
            <FormControl fullWidth margin="normal">
              <RadioGroup
                row
                value={formFields.gender}
                onChange={(e) => setFormFields({...formFields, gender: e.target.value })}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
              <FormHelperText>Please select your gender</FormHelperText>
            </FormControl>
            <TextField
              type="date"
              value={formFields.dob}
              onChange={(e) => setFormFields({...formFields, dob: e.target.value })}
              fullWidth
              margin="normal"
              required
            />
            <FormControl fullWidth margin="normal">
<Select
                value={formFields.course}
                onChange={(e) => setFormFields({...formFields, course: e.target.value })}
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Commerce">Commerce</MenuItem>
                <MenuItem value="Humanities">Humanities</MenuItem>
              </Select>
              <FormHelperText>Please select your course</FormHelperText>
            </FormControl>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleRegister}
                sx={{ width: '48%' }}
              >
                Register
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancel}
                sx={{ width: '48%' }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title">Data stored successfully</Typography>
          <Typography id="modal-description">
            Name: {formFields.name}
            <br />
            Address: {formFields.address}
            <br />
            Mobile: {formFields.mobile}
            <br />
            Email: {formFields.email}
            <br />
            Gender: {formFields.gender}
            <br />
            Date of Birth: {formFields.dob}
            <br />
            Course: {formFields.course}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%'
            }}
          >
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={handleOK}>OK</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default App;