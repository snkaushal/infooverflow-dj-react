import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import IOCard from '../../../lib/components/IOCard';
import IOLink from '../../../lib/components/IOLink';
import classnames from 'classnames';
import './styles.scss';
import { getArticles } from '../requests';

class Articles extends React.Component {
  state = {
    articles: [],
    error: ''
  }

  componentDidMount() {
    if (this.props.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: this.props.token
      }
      getArticles().then(
        res => this.setState({ articles: res.data })
      ).catch(
        err => this.setState({ error: err.data })
      )
    }
  }

  render() {
    return (
      <div className={classnames('io-articles')}>
        {this.state.articles.map(({ id, user, username, title, content }, i) =>
          (
            <IOCard key={i} className={'io-articles__article'}>
              <IOLink to={`/articles/${id}`} value={title} isAuthenticated={this.props.isAuthenticated} />
              <p>{content}</p>
              <b>User Email : </b> {user}
              <b>Username : </b> {username}
            </IOCard>
          ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    token: state.token
  }
}

export default connect(mapStateToProps)(Articles);