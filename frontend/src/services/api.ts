import axios from "axios";
  
const api = axios.create({
    baseURL: (process.env.NODE_ENV === 'development')
    ? 'http://localhost:8000/'
    : 'https://ufo-sightings-app.herokuapp.com',
});

export default api;