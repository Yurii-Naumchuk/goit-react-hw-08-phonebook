import { Oval } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Oval
        height={80}
        width={80}
        color="#1976d2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#42a5f52e"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Container>
  );
};
