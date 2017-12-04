import React from 'react';

class QuestionForm extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        if(!this.inputEl.value == ''){
            return ;
        }
        var newQuestion = {
            title:this.inputEl.value,
            description:this.textArea.value,
            voteCount:0,
        }
        this.form.reset();
        this.props.onNewQuestion(newQuestion);
    }
    render(){
        var styleObj = {display:this.props.formDisplayed ? 'block':'none'};
        return (
            <form ref={(form)=>this.form = form} onSubmit={this.handleSubmit.bind(this)} style={styleObj} name="addQuestion" className="clearfix">
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input ref={(input)=>this.inputEl = input} type="text" className="form-control" id="qtitle" placeholder="您的问题的标题"/>
                </div>
                <textarea ref={(t)=>this.textArea = t} className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <button className="btn btn-success pull-right">确认</button>
                <a onClick={this.props.onToggleForm} className="btn btn-default pull-right">取消</a>
            </form>
        );
    }
}

export {QuestionForm as default}