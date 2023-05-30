import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'authorization': localStorage.getItem('token')
   
  },
  
});


export default apiClient;