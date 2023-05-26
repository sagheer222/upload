import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', 
  timeout: 5000, // Timeout of 5 seconds
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});