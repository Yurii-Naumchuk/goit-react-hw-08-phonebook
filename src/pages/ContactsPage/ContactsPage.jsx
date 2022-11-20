import { ContactForm } from 'components/ContactForm/Form';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/FilterContact/FilterContact';
import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { ToastContainer } from 'react-toastify';
import Container from '@mui/material/Container';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Typography } from '@mui/material';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box
        component="div"
        sx={{
          width: 400,
          mt: 3,
          p: 2,
          backgroundColor: '#3710d255',
          boxShadow:
            'rgb(166 170 188) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px',
        }}
      >
        <Typography component="h1" variant="h2" sx={{ textAlign: 'center' }}>
          Phonebook
        </Typography>
        <ContactForm />
      </Box>
      <Section title={'Contacts'}>
        <Filter />
        {isLoading && <Loader />}
        {contacts?.length === 0 && !isLoading && (
          <Typography component="p">
            Contacts list is empty! Try to add contact
          </Typography>
        )}
        {contacts?.length > 0 && <ContactsList />}
        {error && <p>Ooops... Something went wrong</p>}
      </Section>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default ContactsPage;
