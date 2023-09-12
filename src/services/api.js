import axios from 'axios';

const api = axios.create({
  baseURL: 'http://191.52.55.35:3000',
});

export default api;