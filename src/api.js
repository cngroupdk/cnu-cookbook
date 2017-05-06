import axios from 'axios';

const baseURL = 'https://cookbook.jakubricar.cz/api/';

export default () => axios.create({ baseURL });
