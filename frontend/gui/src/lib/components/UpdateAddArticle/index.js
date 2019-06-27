import React from 'react';
import axios from 'axios';
import IOInput from '../IOInput';

class UpdateAddArticle extends React.Component {
  submitRequest = (e, requestType, articleID) => {
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    switch (requestType) {
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
      <div>
        <form onSubmit={(e) => this.submitRequest(e, requestType, articleID)}>
          <label>Title: </label>
          <IOInput type={'text'} name={'title'} />
          <label>Content: </label>
          <IOInput type={'textfield'} name={'content'} />
          <IOInput type='submit' name={requestType === 'POST' ? 'ADD' : 'UPDATE'} />
        </form>
      </div>
    )
  }
}

export default UpdateAddArticle;