import { Toolbar } from '@mui/material';
import { NavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Toolbar sx={{ display: 'flex' }}>
      <NavLink to="/register">Sing up</NavLink>
      <NavLink to="/login" underline="none">
        Sing in
      </NavLink>
    </Toolbar>
  );
};
