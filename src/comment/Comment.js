import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Comments.css'

class Comment  extends Component {
  render() {
    return (
      <div className='Comment'>
        <div className='content'>
          <span className='author'>{this.props.author}</span>
          <div className='metadata'>
            <span className='data'>{this.props.data}</span>
          </div>
          <div className='text'>{this.props.text}</div>
        </div>
      </div>
    )
  }
}
export default Comment;