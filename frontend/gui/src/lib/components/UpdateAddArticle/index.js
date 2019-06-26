import React from 'react';
import axios from 'axios';

class UpdateAddArticle extends React.Component {
  submitRequest = (e, requestType, articleID) => {
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    switch(requestType) {
      case 'POST': axios.post(`http://127.0.0.1:8000/api/`, {
        title: title,
        content: content
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
      break;
      case 'PUT': axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
        title: title,
        content: content
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
      break;
      default: axios.post(`http://127.0.0.1:8000/api/`, {
        title: title,
        content: content
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
      break;
    }
  }

  render() {
    const { requestType, articleID } = this.props;
    return (
      <div style={{ color: 'black', background: 'lightgrey', height: '100%' }}>
              <form onSubmit={(e) => this.submitRequest(e, requestType, articleID)}>
                <label>Title: </label>
                <input type='text' name='title'/>
                <label>Content: </label>
                <input type='textfield' name='content'/>
                <input type='submit' value={requestType === 'POST' ? 'ADD' : 'UPDATE'}/>
              </form>
      </div>
    )
  }
}

export default UpdateAddArticle;