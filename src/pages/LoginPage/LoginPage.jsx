import { LoginForm } from 'components/LoginForm/LoginForm';
import Container from '@mui/material/Container';

const LoginPage = () => {
  return (
    <Container maxWidth="lg" sx={{ width: '100%' }}>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
