import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { Box, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography component="p" variant="button" sx={{ mr: '10px' }}>
        Welcome, {name}
      </Typography>
      <Button
        variant="contained"
        endIcon={<LogoutIcon />}
        size="small"
        background-color="secondary"
        sx={{ width: 120 }}
        onClick={() => dispatch(logOut())}
      >
        Sing Out
      </Button>
    </Box>
  );
};
