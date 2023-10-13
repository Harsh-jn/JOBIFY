import axios from 'redaxios';

const customFetch = axios.create({
  baseURL: '/api/v1',
});

export default customFetch;