import React from 'react';
import ReactDOM from 'react-dom';
//这些生命周期方法，在组件更新的时候调用
var MessageBox = React.createClass({
    getInitialState: function () {
        console.log('getInitialState');
        return {
            count: 0
        };
    },
    getDefaultProps: function () {
        console.log('getDefaultProps');
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if (nextState.count > 10) {
            return false;
        }
        return true;
    },
    componentWillUpdate: function (nextProp, nextState) {
        console.log('comopnentWillUpdate');
    },
    componentDidUpdate: function () {
        console.log('componentDidUpdate');
    },
    killMySelf: function () {
        /*React.unmountComponentAtNode(document.getElementById('root'));/!*v0.13.0卸载组件方式*!/*/
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    },
    doUpdate: function () {
        this.setState({
            count: this.state.count + 1,
        });
    },
    render: function () {
        console.log('渲染');
        return (
            <div>
                <h1>计数：{this.state.count}</h1>
                <button onClick={this.killMySelf}>卸载掉这个组件</button>
                <button onClick={this.doUpdate}>手动更新</button>
                <Submessage count={this.state.count}/>
            </div>
        );
    }
});

var Submessage = React.createClass({
    componentWillReceiveProps: function (nextProps) {
        console.log('子组件将要获得prop');
    },
    shouldComponentUpdate: function (nextProp, nextState) {
        if (nextProp.count > 5) {
            return false;
        }
        return true;
    },
    render: function () {
        return (
            <h3>当前子组件的计数是：{this.props.count}</h3>
        );
    }
});
var messageBox = ReactDOM.render(<MessageBox/>, document.getElementById('root'));
