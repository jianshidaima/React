import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/commentForm.css';

class CommentForm  extends Component {
  handleSubmit(event){
    event.preventDefault();
    console.log('1');
    let author = this.refs.author.value;
    let text = this.refs.text.value;
    let time = this.getData();
    author === '' || text === ''? alert('请输入之后在提交！'):
    this.props.onCommentSubmit({author,text,time});
    console.log(author,text);
  }
  getData(){
    function p(s) {
    return s < 10 ? '0' + s: s;
    }
    let myDate = new Date();
    //获取当前年
    let year=myDate.getFullYear();
    //获取当前月
    let month=myDate.getMonth()+1;
    //获取当前日
    let date=myDate.getDate(); 
    let h=myDate.getHours();       //获取当前小时数(0-23)
    let m=myDate.getMinutes();     //获取当前分钟数(0-59)
    let s=myDate.getSeconds();  

    let now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);
    let data = now;
    return data;
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