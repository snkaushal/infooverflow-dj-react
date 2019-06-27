import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/auth';
import IOCard from '../../../lib/components/IOCard';
import IOLink from '../../../lib/components/IOLink';
import classnames from 'classnames';
import './styles.scss';

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
        <div className={classnames('io-articles')}>
          {this.state.articles.map(({ id, title, content }, i) =>
            (
              <IOCard key={i} className={'io-articles__article'}>
                <IOLink to={`/articles/${id}`} value={title} />
                <p>{content}</p>
              </IOCard>
            ))}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.authLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);