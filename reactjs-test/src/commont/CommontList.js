'use strict'
import React from 'react';
import Comment from "./Comment";

class CommontList extends React.Component {
    render() {
        let i = 0;
        let commentNodes = this.props.data.map((comment) => {
            return <Comment key={i++} author={comment.author} date={comment.date}>{comment.text}</Comment>
        });
        return (
            <div>{commentNodes}</div>
        );
    }
}

export {CommontList as default}