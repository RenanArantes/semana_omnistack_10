import axios from 'axios';

//House 103, Work 5
const api = axios.create({
    baseURL: 'http://192.168.0.103:3333',
});

export default api;