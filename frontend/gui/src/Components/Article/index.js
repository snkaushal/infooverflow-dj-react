import React from 'react';

class Article extends React.Component {
  props = {
    articles: []
  }

  render() {
    return (
      <div style={{ color: 'black', background: 'lightgrey', height: '100%' }}>
        {this.props.articles.map(({ title, content }) =>
          (
            <div>
              <p>{title}</p>
              <p>{content}</p>
            </div>
          ))}
      </div>
    )
  }
}

export default Article;