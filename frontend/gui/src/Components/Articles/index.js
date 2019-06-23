import React from 'react';
import axios from 'axios';
import Article from '../Article';

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
      <div>
        <Article articles={this.state.articles}/>
      </div>
    )
  }
}

export default Articles;