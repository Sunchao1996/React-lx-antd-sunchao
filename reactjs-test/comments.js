import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui/dist/semantic.css';
import {
    ButtonArea,
    Button,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Icon,
    Input,
    Label,
    TextArea,
    Switch,
    Radio,
    Checkbox,
    Select,
    VCode,
    Agreement,
    Toptips
} from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import CommentBox from "./src/commont/CommentBox";
var comments = [{"author": "wanghao", "date": "5 分钟前", "text": "天气不错啊"}, {}]

ReactDOM.render((
    <div className="ui container"><CommentBox url="./js/comments.json"/></div>), document.getElementById("root"));

// function formatName(user){
//     return `${user.firstName} ${user.lastName}`;
// }
// const user = {
//     firstName :'harper',
//     lastName:'Perez'
// };
// const element = (<h1>hello,{formatName(user)}</h1>);
// ReactDOM.render(element,document.getElementById("root"));

// const element = (<div><h1>Hello!</h1><h1>Good to see you here.</h1></div>);
// ReactDOM.render(element,document.getElementById("root"));


// function Welcome(props){
//     return <h1>Hello,{props.name}</h1>;
// }
// class Welcome1 extends React.Component{
//
//     render(){
//         return <h1>Hello,{this.props.name1}</h1>;
//     }
// }
//
// const element = <Welcome1 name="f" name1="1"/>
//
// ReactDOM.render(element,document.getElementById("root"));

// function Clock(props){
//     return (<div><h1>Hello,world!</h1><h2>It is {props.date.toLocaleTimeString()}</h2></div>);
// }
// function tick(){
//     ReactDOM.render(<Clock date={new Date()} />,document.getElementById("root"));
// }
// setInterval(tick,1000)

// class Clock extends React.Component{
//     constructor(props){
//        super(props);
//        this.state = {date:new Date()};
//     }
//     componentDidMount(){
//         this.timerID = setInterval(()=>this.tick(),1000);
//     }
//     componentWillUnmount(){
//         clearInterval(this.timerID)
//     }
//     tick(){
//         this.setState({
//             date:new Date()
//         });
//        // this.setState(((prevState,props)=>({counter:prevState.counter+props.increment})));state props异步赋值，如果想使用之前的值需要使用带参数逇回调函数
//     }
//     render(){
//         return (<div><h1>Hello,world!</h1><h2>It is {this.state.date.toLocaleTimeString()}</h2></div>);
//     }
// }
// ReactDOM.render(<Clock/>,document.getElementById("root"));
//
// function ActionLink(){
//     function handleClick(e){
//         e.preventDefault();
//         console.log('Th link was clicked');
//     }
//     return (<a href="http://www.baidu.com" onClick={handleClick}>
//         click me
//     </a>);
// }
// ReactDOM.render(<ActionLink/>,document.getElementById("root"));
//
// ReactDOM.render(
//     (<div className="page">
//         <CellsTitle>Radio</CellsTitle><Form radio>
//         <FormCell radio>
//             <CellBody>Option 1</CellBody>
//             <CellFooter>
//                 <Radio name="radio1" value="1" defaultChecked/>
//             </CellFooter>
//         </FormCell>
//         <FormCell radio>
//             <CellBody>Option 2</CellBody>
//             <CellFooter>
//                 <Radio name="radio1" value="2"/>
//             </CellFooter>
//         </FormCell>
//         <Cell link>
//             <CellBody>More</CellBody>
//         </Cell>
//     </Form>
//         <CellBody>
//             <Input type="tel" placeholder="Enter Phone"/>
//         </CellBody></div>)
//     , document.getElementById('root'));
