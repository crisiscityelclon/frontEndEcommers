import axios from "axios";

const BASE_URL = "http://localhost:3000";
const access_token = localStorage.getItem("token");

export const getAllProducts = (searchTerm) => {
    return axios.get(`${BASE_URL}/api/products?name=${searchTerm || ""}`);
};

//ADD PRODUCT
export const createProduct = (product) => {
    return axios.post(`${BASE_URL}/api/products`, product, {
        headers: {
            Authorization: `${access_token}`,
        },
    });
};

//UPDATE AND DELETE
export const updateProduct = (id, product) => {
    return axios.put(`${BASE_URL}/api/products/${id}`, product, {
        headers: {
            Authorization: `${access_token}`,
        },
    });
};

export const removeProduct = (id) => {
    return axios.delete(`${BASE_URL}/api/products/${id}`, {
        headers: {
            Authorization: `${access_token}`,
        },
    });
};

//login
export const login = (loginData) => {
    return axios.post(`${BASE_URL}/auth/login`, loginData);
};