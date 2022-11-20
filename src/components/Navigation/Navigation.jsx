import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavLink } from 'components/AuthNav/AuthNav.styled';
import { Toolbar } from '@mui/material';
import ContactPageOutlined from '@mui/icons-material/ImportContacts';
import HomeIcon from '@mui/icons-material/Home';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Toolbar sx={{ display: 'flex', flexGrow: 1 }}>
      <NavLink to="/">
        <HomeIcon fontSize="small" />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <ContactPageOutlined
            sx={{ mr: 1 }}
            fontSize="small"
          />
          Contacts
        </NavLink>
      )}
    </Toolbar>
  );
};
