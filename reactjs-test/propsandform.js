import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui/dist/semantic.css';
import PropTypes from 'prop-types';
/*受控组件：使用React来进行动态的状态改变，建议使用受控组件，受控组件可以实时的对数据进行验证,并对输入的数据进行限制*/
var FormDemo = React.createClass({
    getInitialState: function () {
        return {
            inputValue: 'input value',
            textareaValue: ''
        };
    },
    handleChange: function (e) {
        /*对于多个输入的解决方案*/
        let target = e.target;
        let value = target.value;
        let name = target.name;
        /*对数据进行实时验证*/
        value = value.toUpperCase();
        this.setState({
            [name]: value
        }, () => console.log(this.state));
    },
    handleSubmit: function (e) {
        e.preventDefault();
    },
    render: function () {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                {/*设置checked时，此单选组不能选择其他的；如果想要设置默认的选项或者值的话应该在checked或者value之前加上default，并且使用驼峰命名*/}
                {/*对于文本框、单选框、复选框等需要输入或者会变化的元素的值使用state进行保存和使用*/}
                {/*使用value对输入域进行赋值的时候，必须对控件指定onChange方法，否则不能改变控件的值*/}
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} name="inputValue"/><br/>
                <select name="select" defaultValue='B'>
                    <option name="select" value="A">A</option>
                    <option name="select" value="B">B</option>
                    <option name="select" value="C">C</option>
                </select><br/>
                A<input type="radio" name="radio" defaultChecked value="A"/>
                B<input type="radio" name="radio" value="B"/>
                C<input type="radio" name="radio" value="C"/>
                D<input type="radio" name="radio" value="D"/><br/>
                A<input type="checkbox" name="checkbox" defaultChecked value="A"/>
                B<input type="checkbox" name="checkbox" value="B"/>
                C<input type="checkbox" name="checkbox" value="C"/>
                D<input type="checkbox" name="checkbox" value="D"/><br/>
                {/*textarea使用defaultValue或者value代替原来textarea标签中输入文本的值*/}
                <textarea name="textareaValue" value={this.state.textareaValue} onChange={this.handleChange}></textarea><br/>
                <input type="submit" onSubmit={this.handleSubmit}/>
            </form>
        </div>);
    }
});
ReactDOM.render(<FormDemo/>, document.getElementById("root"));
class FromDemo1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>{this.props.name}</div>);
    }
}
FromDemo1.propTypes = {name: PropTypes.element.isRequired};
FromDemo1.defaultProps = {name: 1};//设置属性默认值,属性检查在赋给默认值之后

/*非受控组件
 下面是几个适合使用 refs 的情况：
 处理焦点、文本选择或媒体控制。
 触发强制动画。
 集成第三方 DOM 库
 如果可以通过声明式实现，则尽量避免使用 refs。
 例如，不要在 Dialog 组件上直接暴露 open() 和 close() 方法，最好传递 isOpen 属性。*/
class FormDemo2 extends React.Component {
    constructor(props) {
        super(props);
    }

    focus(i, e) {//事件对象应该是放在最后
        console.log(i, e);
        this.inputEl.focus();
    }

    render() {
        return (<div>
            <input ref={(input) => {
                this.inputEl = input
            }} type="text"/>{/*将当前DOM对象赋值给当前对象的属性进行操作，这个操作不受React控制*/}
            <input ref={(input) => {
                input.focus()
            }} type="text"/>{/*ref回调函数中直接使用当前DOM对象进行操作*/}

            <input type="button" onClick={this.focus.bind(this, '1')}></input></div>);//对调用函数进行赋值
    }
}
ReactDOM.render(<FormDemo2/>, document.getElementById("root"));