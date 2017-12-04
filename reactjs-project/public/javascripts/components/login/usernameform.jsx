import React from 'react';
import 'antd/dist/antd.less';
import {Row, Col, Button, Form, Input, Checkbox, Icon, Tabs} from 'antd';
import '../../../stylesheets/login.less'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class LoginForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log();
                return false;
            }
            this.props.changeState({show:false})
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem>
                    {
                        getFieldDecorator('userName', {
                            rules: [{required: true, message: '请输入用户名'}]
                        })(<Input prefix={<Icon type="user" style={{fontSize: 13}}/> } placeholder="用户名"/>)
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码'}]
                        })(<Input prefix={<Icon type="lock" style={{fontSize: 13}}/> } type="password"
                                  placeholder="密码"/>)
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('remeber', {
                            valuePropName: 'checked',
                            initialValue: false,
                        })(<Checkbox>自动登录</Checkbox>)
                    }
                    <a className="login-form-forgot">忘记密码</a>
                    <Button className="login-form-button" type="primary" htmlType="submit">登录</Button>

                </FormItem>
            </Form>
        );
    }
}

const UsernameForm = Form.create()(LoginForm);
export {UsernameForm as default}
