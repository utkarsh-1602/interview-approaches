// reusable Axios instance with a custom configuration

import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'https://api.example.com',
    headers: { 'Content-Type': 'application/json' },
    timeout: 5000,
  });

  customAxios.get('/endpoint').then(response => console.log(response));

  export default customAxios;

