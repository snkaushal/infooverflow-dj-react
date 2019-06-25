import React from 'react';
import axios from 'axios';
import UpdateAddArticle from '../UpdateAddArticle';

class Articles extends React.Component {
  state = {
    articles: [],
    error: ''
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({ articles: res.data });
      })
      .catch(err =>
        this.setState({ error: err.data }));
  }

  render() {
    return (
      <div style={{ color: 'black', background: 'lightgrey', height: '100%' }}>
        All Articles are here : <br />
        {this.state.articles.map(({ id, title, content }, i) =>
          (
            <div key={i}>
              <a href={`/${id}`}>{title}</a>
              <p>{content}</p>
            </div>
          ))}
          <UpdateAddArticle requestType={'POST'} articleID={null}/>
      </div>
    )
  }
}

export default Articles;