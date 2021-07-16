import axios from 'axios';

const API = axios.create({ baseURL: 'https://khissaria-money-manager.herokuapp.com/' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchTransaction = () => API.get('/transaction');
export const AddTransaction = (newTransaction) => API.post('/transaction', newTransaction);
export const deleteTransaction = (id) => API.delete(`/transaction/${id}`);
export const editTransaction = (id, transactionData) => API.patch(`/transaction/${id}`, transactionData);

export const signIn = (formData) => API.post('/users/signIn', formData);
export const signUp = (formData) => API.post('/users/signUp', formData);