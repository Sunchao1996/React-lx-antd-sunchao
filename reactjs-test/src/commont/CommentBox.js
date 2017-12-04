import React from 'react';
import 'semantic-ui/dist/semantic.css';
import CommontList from './CommontList';
import FormList from './FormList';
import $ from 'jquery';
class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {data:[]};
        this.getComments();
        //setInterval(()=>this.getComments(),5000)
    }
    getComments(){
        $.ajax({
            url:this.props.url,
            dataType:'json',
            cache:false,
            success:(comments)=>{
                console.log(comments);
                this.setState({data:comments});
            }
        });
    }
    handleCommentSubmit(comment){
        console.log(comment);
        let comments = this.state.data;
        let newComments = comments.concat(comment);
        this.setState({data:newComments});
    }

    render() {
        return (<div className="ui comments">
            <h1>评论</h1>
            <div className="ui divider"></div>
            <CommontList data={this.state.data}/>
            <FormList onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
        </div>);
    }
}
export {CommentBox as default}