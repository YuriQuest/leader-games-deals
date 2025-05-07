import axios from 'axios';

const API = axios.create({
  baseURL: 'https://www.cheapshark.com/api/1.0',
});

export default API;