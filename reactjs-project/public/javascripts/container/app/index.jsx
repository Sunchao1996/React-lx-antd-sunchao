import React from 'react';
import LoginIndex from '../login'
import Index from '../index';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    changeState(newState){
        console.log(newState);
        this.setState(newState);
    }
    render() {
        return(
            <div>
                {this.state.show ?<LoginIndex history={this.props.history} changeState={this.changeState.bind(this)}/>:<Index/>}
            </div>
        );
    }
}
export {App as default}
