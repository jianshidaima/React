import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox  extends Component {
  render() {
    return (
      <div className='comments'>
        <h2>评论</h2>
        <div className='divider'></div>
        <CommentList data={this.props.data}/>
        <CommentForm/>
      </div>
    )
  }
}


export default CommentBox;
