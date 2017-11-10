import React from 'react';
import ReactDOM from 'react-dom';
import './css/comment.css';
import CommentBox from './comment/CommentBox';


ReactDOM.render((
	<CommentBox url = 'https://api.github.com/search/repositories?q=javascript&sort=stars'/>
	), 
	document.getElementById('app'));
