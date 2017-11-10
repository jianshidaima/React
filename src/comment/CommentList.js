import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';


class CommentList extends Component {
  render() {
    let cpm = this.props.data;
    console.log(typeof(cpm));
    return (
		  <div className='CommentList'>
		    <ul> {
            cpm.map((comment,i) =>{
              return (
                <Comment key={i} author={comment.name} data={comment.id} text={comment.full_name}/>
              )
            })
        } </ul>
		  </div>
		)
	}
}


export default CommentList;
