import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projint-mercado-backend-dev-jext.1.us-1.fl0.io',
});

export default api