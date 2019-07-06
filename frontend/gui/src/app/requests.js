import axios from 'axios';

const getArticles = () => axios.get('http://127.0.0.1:8000/api/');

const getArticle = (articleID) => axios.get(`http://127.0.0.1:8000/api/${articleID}/`);

const postArticle = (title, content, id) => axios.post(`http://127.0.0.1:8000/api/`, {
  title: title,
  content: content,
  id: id
});

const updateArticle = (title, content, articleID) => axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
  title: title,
  content: content
});

export {
  getArticles,
  getArticle,
  postArticle,
  updateArticle,
} 

