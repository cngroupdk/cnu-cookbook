import { create } from 'apisauce';
import { API_BASE_URL } from './config';

const api = create({ baseURL: API_BASE_URL });

export default api;
