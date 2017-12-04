import React from 'react';

class QuestionItem extends React.Component {
    voteUp() {
        var newVoteCount = parseInt(this.props.voteCount,10) + 1;
        this.props.onVote(this.props.questionKey, newVoteCount);
    }

    voteDown() {
        var newVoteCount = parseInt(this.props.voteCount,10) - 1;
        this.props.onVote(this.props.questionKey, newVoteCount);
    }

    render() {
        return (
            <div className="media" key={this.props.key}>{/*16.0.0新版本中不能使this.props.key读取父组件的key*/}
                <div className="media-left">
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-up" onClick={this.voteUp.bind(this)}></span>
                        <span className="vote-count">{this.props.voteCount}</span>
                    </button>
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-down" onClick={this.voteDown.bind(this)}></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export {QuestionItem as default}