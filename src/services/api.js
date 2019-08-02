import axios from 'axios';

const api = axios.create({
  baseURL: 'http://rvieceli-dell:3333',
});

export default api;
