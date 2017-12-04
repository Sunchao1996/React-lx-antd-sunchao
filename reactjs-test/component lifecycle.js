import React from 'react';
import ReactDOM from 'react-dom';
//这些生命周期方法在组件更新时不会重新调用，只有在组件第一次调用的时候才会调用
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
    componentWillMount: function () {
        console.log('componentWillMount');
        var self = this;
        this.timer = setInterval(function () {
            self.setState({
                count: self.state.count + 1
            });
        }, 1000);
    },
    componentDidMount: function () {
        console.log('componentDidMount');
    },
    componentWillUnmount: function () {
        console.log('componentWillUnmount');
        /*console.log(this.getDOMNode());/!*v0.13.0获取节点得方式*!/*/
        console.log(ReactDOM.findDOMNode(this));
        /*v0.14.~获取节点得方式*/
        clearInterval(this.timer);//清除计时器
    },
    killMySelf: function () {
        /*React.unmountComponentAtNode(document.getElementById('root'));/!*v0.13.0卸载组件方式*!/*/
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    },
    render: function () {
        console.log('渲染');
        return (
            <div>
                <h1>计数：{this.state.count}</h1>
                <button onClick={this.killMySelf}>卸载掉这个组件</button>
            </div>
        );
    }
});

var Submessage = React.createClass({
    render: function () {
        return (
            <h3>写代码很有意思</h3>
        );
    }
});
var messageBox = ReactDOM.render(<MessageBox/>, document.getElementById('root'));
