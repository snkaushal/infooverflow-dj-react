import axios from 'axios';

const getArticles = () => axios.get('http://127.0.0.1:8000/api/')

export {
  getArticles
} 

