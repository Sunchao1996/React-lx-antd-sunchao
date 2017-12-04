/*极客学院study-02 React中事件的用法，事件对象介绍
* event(经过React封装的事件对象) = （通用）{
* target:event的DOM元素
* bubbles:boolean 事件是否可以冒泡
* cancelable:时间是否可以取消
* curentTarget:DOMEventTarget
* defaultPrevented:boolean是否默认禁止
* eventPhase:number事件所处的阶段
* isTrusted:boolean 时间是否可信（使用代码触发的事件不是可信的）
* nativeEvent:DOMEvent 获取原声的浏览器发出的对象
* preventDefault(): 禁止默认行为
* stopPropagation(): 禁止冒泡
* timeStamp:number 事件触发的事件戳
* type:String 时间类型
* }
* 剪切事件：{
*   clipboarData:DOMDataTransfer 剪切的数据
* }
* 键盘事件：{
* altKey:boolean 是否按下alt建
* charCode:Number 按下字符键的编码
* ctrlKey:boolean 是否按下ctrl键
* getModeifierState(key):判断您是否按下辅助键
* key:String按下的键
* keyCode:Number 按下键的编码
* locale:String 本地化的字符串
* location:Number 位置
* metaKey:boolean win键
* repeat:boolean 按键是否重复
* shiftKey:boolean 是否按下shift
* which:Number 通用化的charCode和keyCode
* }
* 焦点事件：{
* relatedTarget:DOMEventTarget 焦点事件出发之前的控件
* }
* 鼠标事件：{
* altKey:boolean
* button:Number
* buttons:Number
* clientX:Number 当前鼠标所处的坐标（零点是浏览器窗口的左上角）
* clientY:Number
* ctrlKey:boolean
* getModifierState(key):
* metaKey:boolean
* pageX:Number 零点是html页面的左上角
* pageY:Number
* relatedTarget:DOMEvent
* screenX:Number 零点是整个显示器的左上角
* screenY:Number
* shiftKey:boolean
* }
* 触摸事件：{
* altKey:boolean
* changedTouches:DOMTouchList
* ctrlKey:boolean
* getModifierState(key):
* metaKey:boolean
* shiftKey:boolean
* targetTouches:DOMTouchList
* touches:DomTouchList
* }
* UI元素：{
* detail:Number 滚动的而距离
* view:DOMAbstractView 视窗
* }
* 滚轮滚动事件：{
* deltaMode:Number 滚动单位
* deltaX:Number 相对移动的距离
* deltaY:Number
* deltaZ:Number
* }
* */
import React from 'react';
import ReactDOM from 'react-dom';

/*使用滚动事件对象*/

// var HelloWorld = React.createClass({
//     getInitialState:function(){
//         return {
//             backgroundColor:'#FFFFFF'
//         };
//     },
//     handleWheel:function(event){
//         var newColor = (parseInt(this.state.backgroundColor.substr(1),16)+event.deltaY*997).toString(16);
//         console.log(newColor);
//         newColor = '#' +newColor.substr(newColor.length-6).toUpperCase();
//         this.setState({
//             backgroundColor:newColor
//         });
//     },
//     render:function(){
//         console.log(this.state);
//         return (
//             <div onWheel={this.handleWheel} style={this.state}>
//                 <p>Hello,World!</p>
//             </div>
//         );
//     }
// });

//使用键盘事件对象示例 监控用户的输入
// var HelloWorld = React.createClass({
//     getInitialState:function(){
//       return {
//           password:''
//       };
//     },
//     handleKeyPress:function(event){
//         this.setState({
//             password:this.state.password + event.which
//         });
//         console.log(this.state);
//     },
//     handleChange:function(event){
//         event.target.value='';
//     },
//     render:function(){
//         return (
//             <div>
//                 <input onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
//                 <p style={{'display':this.state.password.indexOf('495051') >= 0 ? 'inline':'none'}}>you got it!</p>{/*按键编码*/}
//             </div>
//         );
//     }
// });

//事件和状态关联记录鼠标移动的坐标
var HelloWorld = React.createClass({
    getInitialState:function(){
        return {
            x:0,
            y:0
        };
    },
    handleMouseMove:function(event){
        this.setState({
            x:event.clientX,
            y:event.clientY,
        });
    },
    render:function(){
        return (
            <div onMouseMove={this.handleMouseMove} style={{height:'1000px',width:'700px',backgroundColor:'gray'}}>
                {`${this.state.x},${this.state.y}`}
            </div>
        );
    }
});

ReactDOM.render(<HelloWorld/>,document.getElementById("root"));