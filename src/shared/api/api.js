import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const instanceContacts = axios.create({
  baseURL: BASE_URL,
});




