import React from 'react';
import 'antd/dist/antd.less';
import LoginTitle from '../../components/login/logintitle';
import {Layout, Button, Form, Input, Icon, Checkbox, Tabs} from 'antd';
import '../../../stylesheets/login.less'
import UsernameForm from '../../components/login/usernameform';
import PhoneForm from '../../components/login/phoneform';
import TitleImg from './../../../images/loginlogo.png';
import OtherLogin from '../../components/login/otherlogin';
const {Header, Footer, Sider, Content} = Layout;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Login extends React.Component {
    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <Layout className="login-container">
                <Content className="login-content">
                    <img src={TitleImg} className="login-logo"/>
                    <LoginTitle/>
                    <div style={{width: '25%'}}>
                        <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}
                              tabBarStyle={{textAlign: 'center'}}>
                            <TabPane tab="手机号登录" key="1">
                                <PhoneForm history={this.props.history} changeState={this.props.changeState}/>
                                <OtherLogin/>
                            </TabPane>
                            <TabPane tab="账号密码登录" key="2">
                                <UsernameForm history={this.props.history}  changeState={this.props.changeState}/>
                                <OtherLogin/>
                            </TabPane>
                        </Tabs>
                    </div>
                </Content>
                <Footer>footer</Footer>
            </Layout>
        );
    }
}

const LoginIndex = Form.create()(Login);
export {LoginIndex as default}
