/*则修*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui/dist/semantic.css';
var MessageBox = React.createClass({
    getInitialState: function () {//初始化state方法1
        return {
            isVisible: true,
            titleMessage: '你好世界（来自state哦）'

        };
    },
    render: function () {
        var styleObj = {
            display: this.state.isVisible ? 'block' : 'none',
        };
        return (<div>
            <h1 style={styleObj}>{this.state.titleMessage}</h1>
            <Submessage></Submessage>
        </div>);
    }
});
var Submessage = React.createClass({
    render: function () {
        return (<h3>写代码很有意思</h3>);
    }
});
class MessageBox1 extends React.Component {
    constructor(props) {
        super(props);
        //使用自定义组件的方式的话，对state进行初始化应该在构造函数中进行初始化
        this.state = {
            isVisible: false,
            titleMessage: '你好世界1（来自state哦）'
        };
    }

    // getInitialState() {//初始化state方法1,只能使用在React.createClass的时候使用这种方法对state进行初始化
    //     return {
    //         isVisible: true,
    //         titleMessage: '你好世界1（来自state哦）'
    //
    //     };
    // }

    render() {
        var styleObj = {
            display: this.state.isVisible ? 'block' : 'none',
        };
        return (<div>
            <h1 style={styleObj}>{this.state.titleMessage}</h1>
            <Submessage></Submessage>
        </div>);
    }
}
//纠正：视频中使用的React.render已经不赞成使用
var messageBox1 = ReactDOM.render(<MessageBox1/>, document.getElementById("root"), function () {
    console.log('渲染完成啦');
});
console.log(messageBox1);
//使用setState对state进行数据设置的时候，设置完成将会进行自动的render
messageBox1.setState({
    isVisible: true
});
//如果使用这种方式进行对state中的属性赋值的话，需要使用下面的方法对state进行重新加载
messageBox1.state.isVisible = false;
messageBox1.forceUpdate();
//自定义的组件名称应该首字母大写，或者使用之前将小写的组件名称赋值给一个首字母大写的属性名，React检测时，将首字母小写的组件当做html自带组件，只有首字母
//大写的组件使用时才会将其使用React.createElement进行构造
var ClickApp = React.createClass({
    getInitialState:function(){
        return {clickCount:0};
    },
    handleClick:function(){
      this.setState({clickCount:this.state.clickCount+1});
    },
    render:function(){
        return (<div>
            <h2>点击下面按钮</h2>
            <button onClick={this.handleClick}>点击我</button>
            <p>你一共点击了：{this.state.clickCount}次</p>
        </div>);
    }
});
ReactDOM.render(<ClickApp/>,document.getElementById("root"));