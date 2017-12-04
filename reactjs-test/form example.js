/**极客学院-study01 表单：可控组件和不可控组件
 * */
import React from 'react';
import ReactDOM from 'react-dom';
/*React数据流是单向的
 * 可控组件的好处：
 *   符合React的数据流
 *   数据存储在state中，便于使用
 *   便于对数据处理
 * */

// var MyForm = React.createClass({
//     render: function () {
//         return (
//             <input type="text" defaultValue="Hello World!"/>
//         );
//     }
// });

//不可控组件
// var MyForm = React.createClass({
//     submitHandler:function(event){
//         event.preventDefault();
//         var helloTo = this.inputEl.value;
//         alert(helloTo);
//     },
//     render:function(){
//         return (
//             <form onSubmit={this.submitHandler}>
//                 <input ref={(input)=>this.inputEl = input} type="text" defaultValue="Hello World!"/>
//                 <br/>
//                 <button type="submit">Speak</button>
//             </form>
//         );
//     }
// });

//可控组件
// var MyForm = React.createClass({
//     getInitialState:function(){
//       return {
//           helloTo:'Hello world!'
//       };
//     },
//     handleChange:function(event){
//       this.setState({
//           helloTo:event.target.value,
//       });
//     },
//     submitHandler:function(event){
//         event.preventDefault();
//         alert(this.state.helloTo);
//     },
//     render:function(){
//         return (
//             <form onSubmit={this.submitHandler}>
//                 <input type="text" value={this.state.helloTo} onChange={this.handleChange}/>
//                 <br/>
//                 <button type="submit">Speak</button>
//             </form>
//         );
//     }
// });

//表单元素介绍
//<label htmlFor="name">Name</label>htmlFor相当于palsehoder
//input  textarea  select
// var MyForm = React.createClass({
//     getInitialState:function(){
//         return {
//             username:'',
//             gender:'man',
//             checked:true
//         };
//     },
//     handleUsernameChange:function(event){
//         this.setState({
//             username:event.target.value
//         });
//     },
//     handleGenderChange:function(event){
//         this.setState({
//             gender:event.target.value
//         });
//     },
//     handleCheckboxChange:function(event){
//         this.setState({
//             checked:event.target.checked
//         });
//     },
//     submitHandler:function(event){
//         event.preventDefault();
//         console.log(this.state);
//     },
//     render:function(){
//         return (
//             <form onSubmit={this.submitHandler}>
//                 <label htmlFor="username">请输入用户名:</label>
//                 <input id="username" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
//                 <br/>
//                 <select value={this.state.gender} onChange={this.handleGenderChange}>
//                     <option value="man">男</option>
//                     <option value="woman">女</option>
//                 </select>
//                 <br/>
//                 <label htmlFor="checkbox">同意用户协议:</label>
//                 <input id="checkbox" type="checkbox" value="同意用户协议" onChange={this.handleCheckboxChange} checked={this.state.checked}/>
//                 <br/>
//                 <button type="submit">注册</button>
//             </form>
//         );
//     }
// });

//事件处理函数复用
//为什么要复用事件处理函数：同样的功能被写了多次
//复用方式： 1.bind(event,params) this.handleChange.bind(this,param);
//          2.name复用，通过event.target.name
// bind复用
// var MyForm = React.createClass({
//     getInitialState:function(){
//       return {
//           username:'',
//           gender:'man',
//           checkbox:true
//       };
//     },
//     handleChange:function(name,event){
//       var newState = {};
//       newState[name] = name =="checkbox" ? event.target.checked:event.target.value;
//       this.setState(newState);
//     },
//     submitHandler:function(e){
//       e.preventDefault();
//       console.log(this.state);
//     },
//     render:function(){
//         return (
//             <form onSubmit={this.submitHandler}>
//                 <label htmlFor="username">请输入用户名：</label>
//                 <input id="username" type="text" value={this.state.username} onChange={this.handleChange.bind(this,"username")}/>
//                 <br/>
//                 <select value={this.state.gender} onChange={this.handleChange.bind(this,"gender")}>
//                     <option value="man">男</option>
//                     <option value="woman">女</option>
//                 </select>
//                 <br/>
//                 <label htmlFor="checkbox">同意用户协议</label>
//                 <input id="checkbox" type="checkbox" checked={this.state.checkbox} onChange={this.handleChange.bind(this,"checkbox")}/>
//                 <button type="submit">注册</button>
//             </form>
//         );
//     }
// });

//name复用
// var MyForm = React.createClass({
//     getInitialState:function(){
//         return {
//             username:'',
//             gender:'man',
//             checkbox:true
//         };
//     },
//     handleChange:function(event){
//         var newState = {};
//         newState[ event.target.name] = event.target.name =="checkbox" ? event.target.checked:event.target.value;
//         this.setState(newState);
//     },
//     submitHandler:function(e){
//         e.preventDefault();
//         console.log(this.state);
//     },
//     render:function(){
//         return (
//             <form onSubmit={this.submitHandler}>
//                 <label htmlFor="username">请输入用户名：</label>
//                 <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
//                 <br/>
//                 <select name="gender" value={this.state.gender} onChange={this.handleChange}>
//                     <option value="man">男</option>
//                     <option value="woman">女</option>
//                 </select>
//                 <br/>
//                 <label htmlFor="checkbox">同意用户协议</label>
//                 <input name="checkbox" id="checkbox" type="checkbox" checked={this.state.checkbox} onChange={this.handleChange}/>
//                 <button type="submit">注册</button>
//             </form>
//         );
//     }
// });

//表单组件自定义
var Radio = React.createClass({
    getInitialState: function () {
        return {
            value: this.props.defaultValue
        };
    },
    handleChange: function (e) {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        this.setState({
            value: event.target.value
        });
    },
    render: function () {
        var childers = [];
        var value = this.props.value || this.state.value;
        this.props.children.forEach(function (child, i) {
            var label = (
                <label>
                    <input type="radio" name={this.props.name} value={child.props.value}
                           checked={child.props.value == value} onChange={this.handleChange}/>{child.props.children}
                </label>
            );
            childers[i] = label;
        }.bind(this));
        return (
            <div>
                {childers}
            </div>
        );
    }
});
var MyForm = React.createClass({
    getInitialState: function () {
        return {
            my_radio: 'A'
        };
    },
    handleChange: function (event) {
        this.setState({
            my_radio: event.target.value
        });
    },
    submitHandle: function (event) {
        event.preventDefault();
        alert(this.state.my_radio);
    },
    render: function () {
        return (
            <form onSubmit={this.submitHandle}>
                <Radio name="my_radio" value={this.state.my_radio} onChange={this.handleChange}>
                    <option value="A">First Option</option>
                    <option value="B">First2 Option</option>
                    <option value="C">First3 Option</option>
                </Radio>
                <button type="submit">提交</button>
            </form>
        );
    }
});
ReactDOM.render(<MyForm/>, document.getElementById("root"));