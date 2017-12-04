import React from 'react';
import QuestionItem from './QuestionItem'

class QuestionList extends React.Component {
    render() {
        var questions = this.props.questions;
        if (!Array.isArray(questions)) {
            throw  new Error("这不是一个数组");
        }
        var questionComps = questions.map((question) => {
            return (<QuestionItem key={question.key}
                                  questionKey={question.key}
                                  title={question.title}
                                  description={question.description}
                                  voteCount={question.voteCount}
                                  onVote={this.props.onVote}/>);
        });
        return (
            <div id="questions" className="">
                {questionComps}
            </div>

        );
    }
}

export {QuestionList as default}