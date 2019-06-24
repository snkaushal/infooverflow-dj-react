import React from 'react';
import axios from 'axios';

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
        {this.state.articles.map(({ id, title, content }) =>
          (
            <div>
              <a href={`/${id}`}>{title}</a>
              <p>{content}</p>
            </div>
          ))}
      </div>
    )
  }
}

export default Articles;