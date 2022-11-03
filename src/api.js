import axios from 'axios';

const API_BASE_URL = 'https://exercise.cngroup.dk/api/';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  },
});
