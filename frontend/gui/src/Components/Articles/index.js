import React from 'react';
import axios from 'axios';
import UpdateAddArticle from '../UpdateAddArticle';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions/auth';

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
        {this.props.isAuthenticated ? 
        <div onClick={() => this.props.logout()}>Logout</div> : <Link to='/login'>Login</Link>
      }
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