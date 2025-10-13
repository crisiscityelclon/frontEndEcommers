import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
const access_token = localStorage.getItem('token');

export const getAllProducts = (searchTerm) => {
    return axios.get(`${BASE_URL}/api/products?name=${searchTerm || ''}`);
};