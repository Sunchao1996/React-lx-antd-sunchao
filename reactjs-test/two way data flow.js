import React from 'react';
import ReactDOM from 'react-dom';
import ReactAddons from './public/javascripts/react-with-addons';//在0.13版本中可以使用，在0.14版本中将其中的多个模块分离开来,16中移除这个模块不能继续使用
//v0.13.0
var EasyForm = React.createClass({
    mixins: [ReactAddons.addons.LinkedStateMixin
    ],
    getInitialState: function () {
        return {
            message: 'react is awesome!',
            isReactAwesome: true,
        };
    },
    render: function () {
        return (
            <div>
                <h1>我想说:{this.state.message}</h1>
                <h2>React是不是很好用？{this.state.isReactAwesome ? "非常好用" : '一般般'}</h2>
                <input type="text" valueLink={this.linkState('message')}/>
                <br/>
                <input type="checkbox" checkedLink={this.linkState('isReactAwesome')}/>{/*使用Link进行双向的数据绑定*/}
                <br/>
                <SubComp messageLink={this.linkState('message')} likeLink={this.linkState('isReactAwesome')}/>
            </div>
        );
    }
});

var SubComp = React.createClass({
    render: function () {
        return (<div>
            <h3>这是个子组件</h3>
            <SubSubComp {...this.props}/>{/*使用结构赋值的方式将对属性进行传递使用*/}
        </div>);
    }
});
var SubSubComp = React.createClass({
    render: function () {
        return (
            <div>
                <p>你想说什么？</p>
                <input type="text" valueLink={this.props.messageLink}/>
                <p>你稀罕React么？</p>
                <input type="checkbox" checkedLink={this.props.likeLink}/>
            </div>
        );
    }
});

ReactDOM.render(<EasyForm/>, document.getElementById("root"));