import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/commentForm.css';

class CommentForm  extends Component {
  handleSubmit(event){
    event.preventDefault();
    console.log('1');
    let author = this.refs.author.value;
    let text = this.refs.text.value;
    console.log(author,text);
    this.props.onCommentSubmit({author,text,data:'刚刚。。'});
  }
  render() {
    return ( 
      <form className = 'form' onSubmit={this.handleSubmit.bind(this)}>
      	<div className='field'>
      		<input type='text' placeholder='姓名' ref='author'/>
      	</div>
      	<div className='field'>
      		<textarea placeholder='评论' ref='text'></textarea>
      	</div>
      	<button type='submit' className='blue'>
      		添加评论
      	</button>
      </form>
    )
  }
}


export default CommentForm;