import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onLogin = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
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
      onSubmit={onLogin}
      autoComplete="off"
    >
      <TextField
        sx={{ mb: 2 }}
        type="email"
        name="email"
        value={email}
        label="Email"
        variant="standard"
        onChange={handleChange}
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
        Sing in
      </Button>
    </Box>
  );
};
