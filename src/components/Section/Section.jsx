import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Box component="div" sx={{ alignItems: 'center', mt: 2 }}>
      <Typography component="h2" variant="h4" sx={{ textAlign: 'center' }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
