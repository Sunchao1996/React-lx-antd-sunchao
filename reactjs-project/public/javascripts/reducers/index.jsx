import { combineReducers } from 'redux';
import todolist from './todos';
// import visibilityFilter from './visibilityFilter';
//combineReducers将多个reducer合成一个
const reducer = combineReducers({
    todolist,
});

export default reducer;
