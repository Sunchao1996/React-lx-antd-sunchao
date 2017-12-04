import React from 'react';
import Logo from '../../../images/indexlogo.png';
class IndexLogo extends React.Component{
    render(){
        return (
            <img src={Logo} style={{
                position: 'absolute',
                left: '25px',
                top: '16px',
                width: '139px',
                height: '32px',
                display: `${this.props.collapsed ? 'none' : ''}`,
            }}/>
        );
    }
}

export {IndexLogo as default}