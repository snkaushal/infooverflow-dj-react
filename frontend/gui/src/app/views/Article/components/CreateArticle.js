import React from 'react';
import UpdateArticle from './UpdateArticle';
import IOCard from '../../../../lib/components/IOCard';

export default class CreateArticle extends React.Component {
  render() {
    return (
      <IOCard>
        <UpdateArticle requestType={'POST'}/>
      </IOCard>
    )
  }
}