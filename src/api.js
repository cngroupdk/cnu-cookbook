import axios from 'axios';
import { API_BASE_URL } from './appConfig';

export default () => axios.create({ baseURL: API_BASE_URL });
