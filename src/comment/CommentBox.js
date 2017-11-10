import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';
import axios from 'axios';

class CommentBox  extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    console.log(this.props.url);
    axios.get(this.props.url).then((comments) => {
      console.log(comments.data.items);
      this.setState({data:comments.data.items});
    }).catch((err) => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className='comments'>
        <h2>评论</h2>
        <div className='divider'></div>
        <CommentList data={this.state.data}/>
        <CommentForm/>
      </div>
    )
  }
}


export default CommentBox;
