import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui/dist/semantic.css';
import {Router, Route, Link, hashHistory, Redirect, IndexRoute, IndexLink, browserHistory} from 'react-router';
class App extends React.Component {
    render() {
        return (<div>
                <div className="ui secondary pointing menu">
                    <IndexLink to="/">home</IndexLink>
                    <Link to="/tv">tv</Link>
                    <Link to="/tv/shows/1">shows</Link>
                </div>
                {this.props.children}</div>
        );
    }
}
class TV extends React.Component {
  /*  componentDidMount() {
      /!*  console.log(this.props.route.setRouteLeaveHook(this.props.route,
            this.routerWillLeave))*!/
        /!*this.props.router.setRouteLeaveHook(

         )*!/
        this.props.route.routerWillLeave(this.routerWillLeave)
    }
    routerWillLeave(){

    }*/
    routerWillLeave(nextLocation) {
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
        return '确认要离开？';
    }

    render() {
        return (<div>
            <div className="ui info message">电视节目列表</div>
            {this.props.children}
        </div>);
    }
}
class Shows extends React.Component {


    render() {
        return (<div>节目{this.props.params.id}</div>);
    }
}
class R extends React.Component {
    render() {
        return (<div className="ui container">
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={FormDemo}/>
                    <Route path="tv" component={TV} onEnter={(nextState, replace) => {
                        //console.log(nextState);//nextState包含params,location,routers(经过的路由)
                    }}>
                        {/*<Route path="shows/:id" component={Shows} ></Route>*/}
                        <Redirect to="/shows/:id" from="shows/:id"/>
                    </Route>
                </Route>
                <Route path="/shows/:id" component={Shows} onEnter={({params}, replace) => {
                    {/*replace(`/`);*/
                    }//用于页面跳转
                    // console.log(params.id);
                }} onLeave={(nextState, replace) => {
                    // console.log(nextState)
                }}/>
            </Router>
        </div>);
    }
}
class FormDemo extends React.Component {
    handleSubmit() {
        console.log(this.refs.id.value);
        hashHistory.push(`/shows/${this.refs.id.value}`);//实现跳转
    }

    render() {
        return (<form onSubmit={this.handleSubmit.bind(this)}>
            <input ref="id" type="text"/>
            <input type="submit"/>
        </form>);
    }
}
//路由的包含关系表现组件的包含关系
ReactDOM.render(
    (
        <R/>),
    document.getElementById("root")
)
;
