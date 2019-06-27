import React from 'react';
import axios from 'axios';
import UpdateAddArticle from '../../../lib/components/UpdateAddArticle';
import IOCard from '../../../lib/components/IOCard';

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
      <IOCard>
        <p>{this.state.article.title}</p>
        <p>{this.state.article.content}</p>
        <UpdateAddArticle requestType={'PUT'} articleID={this.props.match.params.articleID} />
      </IOCard>
    )
  }
}

export default Article;