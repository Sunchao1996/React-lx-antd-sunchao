import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListTodoMemos from '../public/javascripts/components/ListTodoMemos';
import ListDoingMemos from '../public/javascripts/components/ListDoingMemos';
import ListDoneMemos from '../public/javascripts/components/ListDoneMemos';
import {
    deleteTodo,
    changeTodoToDoing,
    changeDoingToDone,
    changeDoingToTodo,
    changeDoneToDoing,
} from '../public/javascripts/actions';
/*
 * @class AllMemosRoute `全部事项`组件
 */
class AllMemosRoute extends Component {
    render() {
        const { dispatch, todolist } = this.props;
        return (
            <div>
                <ListTodoMemos
                    todolist={todolist}
                    onDel={index => dispatch(deleteTodo(index))}
                    onTodoToDoing={index => dispatch(changeTodoToDoing(index))}
                />
                <ListDoingMemos
                    todolist={todolist}
                    onDel={index => dispatch(deleteTodo(index))}
                    onDoingToDone={index => dispatch(changeDoingToDone(index))}
                    onDoingToTodo={index => dispatch(changeDoingToTodo(index))}
                />
                <ListDoneMemos
                    todolist={todolist}
                    onDel={index => dispatch(deleteTodo(index))}
                    onDoneToDoing={index => dispatch(changeDoneToDoing(index))}
                />
            </div>
        );
    }
}
AllMemosRoute.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            istodo: PropTypes.bool.isRequired,
            doing: PropTypes.bool.isRequired,
            done: PropTypes.bool.isRequired,
        }).isRequired).isRequired,
};
const mapStateToProps = (state) => {
    return { todolist: state.todolist };
};//返回的对象作为容器组件的默认属性，state始终是第一个参数，第二个参数为组件的props对象，订阅store，
export default connect(mapStateToProps)(AllMemosRoute);
