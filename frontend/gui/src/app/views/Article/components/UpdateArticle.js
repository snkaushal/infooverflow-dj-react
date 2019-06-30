import React from 'react';
import axios from 'axios';
import IOInput from '../../../../lib/components/IOInput';

class UpdateArticle extends React.Component {
  state = {
    title: '',
    conetent: ''
  }

  submitRequest = (requestType, articleID, e) => {
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
        <form onSubmit={(e) => this.submitRequest(requestType, articleID, e)}>
          <label>Title: </label><br />
          <IOInput
            type={'text'}
            name={'title'}
          /><br />
          <label>Content: </label><br />
          <IOInput
            type={'textfield'}
            name={'content'}
          /><br />
          <IOInput type='submit' name={requestType === 'POST' ? 'ADD' : 'UPDATE'} />
        </form>
      </div>
    )
  }
}

export default UpdateArticle;