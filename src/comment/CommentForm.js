import React from 'react';
import ReactDOM from 'react-dom';
import '../css/commentForm.css'

const CommentForm = () => (
  <form className = 'form'>
  	<div className='field'>
  		<input type='text' placeholder='姓名'/>
  	</div>
  	<div className='field'>
  		<textarea placeholder='评论'></textarea>
  	</div>
  	<button type='submit' className='blue'>
  		添加评论
  	</button>
  </form>
)


export default CommentForm;