import React from 'react';

class ShowAddButton extends React.Component{
    render(){
        return (
            <button onClick={this.props.onToggleForm} id="add-question-btn" className="btn btn-success">添加问题</button>
        );
    }
}
export {ShowAddButton as default}