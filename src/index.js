import React from 'react';
import ReactDOM from 'react-dom';
import './css/comment.css';
import CommentBox from './comment/CommentBox';

var comments = [
	{'author':'张三','data':'4分钟','text':'天气不错'},
	{'author':'这艘四','data':'1分钟','text':'天气不错'},
	{'author':'王五','data':'6分钟','text':'天气不错'}
]
ReactDOM.render((
	<CommentBox data={comments} />
	), 
	document.getElementById('app'));
