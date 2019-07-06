import React from 'react';
import IOInput from '../../../../lib/components/IOInput';
import { postArticle, updateArticle } from '../../../requests';

class UpdateArticle extends React.Component {
  state = {
    title: '',
    conetent: ''
  }

  submitRequest = (requestType, articleID, e) => {
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    switch (requestType) {
      case 'POST': 
      const id = title.split(' ').join('_').toLowerCase();
      postArticle(title, content, id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        break;
      case 'PUT': updateArticle(title, content, articleID)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        break;
      default: postArticle(title, content)
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