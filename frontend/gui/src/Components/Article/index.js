import React from 'react';
import axios from 'axios';

class Article extends React.Component {
  state = {
    article: {},
    error: ''
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`)
      .then(res => {
        this.setState({ article: res.data });
      })
      .catch(err =>
        this.setState({ error: err.data }));
  }

  render() {
    return (
      <div style={{ color: 'black', background: 'lightgrey', height: '100%' }}>
              Single Article
              <p>{this.state.article.title}</p>
              <p>{this.state.article.content}</p>
      </div>
    )
  }
}

export default Article;