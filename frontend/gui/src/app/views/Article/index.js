import React from 'react';
import axios from 'axios';
import UpdateAddArticle from './components/UpdateArticle';
import IOCard from '../../../lib/components/IOCard';
import { connect } from 'react-redux'

class Article extends React.Component {
  state = {
    article: {},
    error: ''
  }

  componentDidMount() {
    if (this.props.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: this.props.token
      }
      const articleID = this.props.match.params.articleID;
      axios.get(`http://127.0.0.1:8000/api/${articleID}/`)
        .then(res => {
          this.setState({ article: res.data });
        })
        .catch(err =>
          this.setState({ error: err.data }));
    }
  }

  render() {
    const { article } = this.state;
    return (
      <IOCard>
        <p>{article.title}</p>
        <p>{article.content}</p>
        <UpdateAddArticle
          requestType={'PUT'}
          article={article}
          articleID={this.props.match.params.articleID} />
      </IOCard>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}

export default connect(mapStateToProps)(Article);