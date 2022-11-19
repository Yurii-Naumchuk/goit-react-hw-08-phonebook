import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onRegister = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        mr: 'auto',
        ml: 'auto',
      }}
      onSubmit={onRegister}
      autoComplete="off"
    >
      <TextField
        sx={{ mb: 2 }}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        label="Name"
        variant="standard"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <TextField
        sx={{ mb: 2 }}
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        label="Email"
        variant="standard"
      />
      <TextField
        sx={{ mb: 2 }}
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        label="Password"
        variant="standard"
       />
      <Button
        type="submit"
        variant="contained"
        size="medium"
        sx={{ display: 'flex', width: 100, mr: 'auto', ml: 'auto' }}
      >
        Sing up
      </Button>
    </Box>
  );
};
