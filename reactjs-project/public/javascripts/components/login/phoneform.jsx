import React from 'react';
import 'antd/dist/antd.less';
import {Button, Form, Input, Checkbox, Icon, Tabs, Row, Col} from 'antd';
import '../../../stylesheets/login.less'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class LoginForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('Received values of form: ', values);
                return false;
            }
            //this.props.changeState({show: false})
            this.props.history.pushState(null,'/index');
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem>
                    {
                        getFieldDecorator('phone', {
                            rules: [{required: true, message: '请输入手机号'}]
                        })(<Input prefix={<Icon type="mobile" style={{fontSize: 13}}/> } placeholder="手机号"/>)
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('validateCode', {
                            rules: [{required: true, message: '请输入验证码'}]
                        })(
                            <Row gutter={8}>
                                <Col span={16}>
                                    <Input prefix={<Icon type="mail" style={{fontSize: 13}}/> }
                                           type="password"
                                           placeholder="验证码"/>
                                </Col>
                                <Col span={8}>
                                    <Button>获取验证码</Button>
                                </Col>
                            </Row>)
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

const PhoneForm = Form.create()(LoginForm);
export {PhoneForm as default}
