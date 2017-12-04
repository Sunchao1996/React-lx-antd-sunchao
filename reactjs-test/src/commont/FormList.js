'use strict'
import React from 'react';
class FormList extends React.Component {
    handleSubmit(e){
        e.preventDefault();
        console.log('提交 表单');
        let author = this.refs.author.value;
        let text = this.refs.text.value;
        console.log(author,text);
        this.props.onCommentSubmit({author,text,date:'刚刚'});

    }
    render() {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="姓名" ref="author"/>
                </div>
                <div className="field">
                    <textarea type="text" placeholder="评论" ref="text"/>
                </div>
                <button type="submit" className="ui blue button">添加评论</button>

            </form>
        );
    }
}

export {FormList as default}