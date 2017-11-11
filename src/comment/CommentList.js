import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';


class CommentList extends Component {
  render() {
    let cpm = this.props.data;
    console.log(cpm);
    console.log(typeof(cpm));
    return (
		  <div className='CommentList'>
		    <ul> {
            cpm.map((comment,i) =>{
              return (
                <Comment key={i} author={comment.author} data={comment.data} text={comment.text}/>
              )
            })
        } </ul>
		  </div>
		)
	}
}


export default CommentList;
