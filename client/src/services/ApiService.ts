import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const apiRequest = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
});
