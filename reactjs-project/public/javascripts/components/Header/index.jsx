import React from 'react';
import {Icon} from 'antd';

class HeaderIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index-header-inner">
                <Icon onClick={this.props.changeSider} className="index-header-icon"
                      type={this.props.collapsed ? "menu-unfold" : "menu-fold"}/>
            </div>
        );
    }
}
export{HeaderIndex as default}