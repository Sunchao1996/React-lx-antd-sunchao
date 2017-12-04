import React from 'react'
import QQIcon from '../../../images/QQ.png';
import ZFBIcon from '../../../images/zfb_icon.png';
import XLIcon from '../../../images/xl_icon.png';
import {Row, Col} from 'antd';
class OtherLogin extends React.Component {

    render() {
        return (
            <Row type="flex" align='center'>
                <Col span={7}>
                    <span>其他登录方式&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </Col>
                <Col span={2}>
                    <img className="login-form-icon" src={QQIcon}/>
                </Col>
                <Col span={2}>
                    <img className="login-form-icon" src={ZFBIcon}/>
                </Col>
                <Col span={2}>
                    <img className="login-form-icon" src={XLIcon}/>
                </Col>

                <Col span={11}><a className="login-form-forgot" href="http://www.baidu.com">注册</a></Col>
            </Row>
        );
    }
}

export {OtherLogin as default}
