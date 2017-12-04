import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, compose(
        applyMiddleware(thunkMiddleware),
        typeof window.devToolsExtension === 'function' ? window.devToolsExtension() : f => f
    ));
    return store;
}
const store = createStore(reducer,initialState);//initialState默认值，reducer为函数
