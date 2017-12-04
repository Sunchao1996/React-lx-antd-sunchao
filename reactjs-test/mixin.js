import React from 'react';
import ReactDOM from 'react-dom';
//mixin
var mixins = {
    componentWillMount: function () {
        this.oldStates = [];
    },
    componentWillUpdate: function (nextProp, nextState) {
        this.oldStates.push(nextState);
    },
    previousState: function () {
        var index = this.oldStates.length - 1;
        return index === -1 ? {} : this.oldStates[index];
    }
};
var MessageBox = React.createClass({
    mixins: [mixins],
    getInitialState: function () {
        console.log('getInitialState');
        return {
            count: 0
        };
    },
    getDefaultProps: function () {
        console.log('getDefaultProps');
    },

    killMySelf: function () {
        /*React.unmountComponentAtNode(document.getElementById('root'));/!*v0.13.0卸载组件方式*!/*/
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    },
    doUpdate: function () {
        this.setState({
            count: this.state.count + 1,
        });
        window.alert(`上一次的计数是：${this.previousState().count}`);
    },
    render: function () {
        console.log('渲染');
        return (
            <div>
                <h1>计数：{this.state.count}</h1>
                <button onClick={this.killMySelf}>卸载掉这个组件</button>
                <button onClick={this.doUpdate}>手动更新</button>
                <Submessage count={this.state.count}/>
                <SubSubMessage count={this.state.count}/>
            </div>
        );
    }
});
//mixin未找到使用方式
// class SubSubMessage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//
//     }
//
//     componentWillReceiveProps() {
//         this.setState({
//             count: this.props.count * 4,
//         });
//     }
//
//     render() {
//         console.log(`上一次子zi组件的计数是：${this.oldStates}`);
//         return (
//             <h3>当前子组件的计数是：{this.props.count}</h3>
//         );
//     }
// }
// SubSubMessage.prototype.mixins = [mixins];
var Submessage = React.createClass({
    mixins: [mixins],
    getInitialState: function () {
        return {
            count: 0,
        };
    },

    componentWillReceiveProps: function (nextProp) {
        this.setState({
            count: this.props.count * 2,
        });
    },
    render: function () {
        console.log(`上一次子组件的计数是：${this.previousState().count}`);
        return (
            <h3>当前子组件的计数是：{this.props.count}</h3>
        );
    }
});
var messageBox = ReactDOM.render(<MessageBox/>, document.getElementById('root'));
