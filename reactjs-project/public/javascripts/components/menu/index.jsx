import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import HeaderIndex from '../../components/Header';
import '../../../stylesheets/index.less'
import 'antd/dist/antd.less';
import Logo from './../../../images/indexlogo.png';
const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;
class Index extends React.Component {

    render() {
        return (
            <Menu
                theme='dark'
                style={{width: '100%'}}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon style={{fontSize: 18}} type="user"/><span
                    style={{fontSize: 15}}>用户管理</span></span>}>
                    <Menu.Item key="1">选项1</Menu.Item>
                    <Menu.Item key="2">选项2</Menu.Item>
                    <Menu.Item key="3">选项3</Menu.Item>
                    <Menu.Item key="4">选项4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon style={{fontSize: 18}} type="appstore"/><span
                    style={{fontSize: 15}}>资源管理</span></span>}>
                    <Menu.Item key="5">选项5</Menu.Item>
                    <Menu.Item key="6">选项6</Menu.Item>
                    <SubMenu key="sub3" title="子菜单">
                        <Menu.Item key="7">选项7</Menu.Item>
                        <Menu.Item key="8">选项8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4"
                         title={<span><Icon style={{fontSize: 18}} type="setting"/><span
                             style={{fontSize: 15}}>系统设置</span></span>}>
                    <Menu.Item key="9">选项9</Menu.Item>
                    <Menu.Item key="10">选项10</Menu.Item>
                    <Menu.Item key="11">选项11</Menu.Item>
                    <Menu.Item key="12">选项12</Menu.Item>
                </SubMenu>
            </Menu>
        )
            ;
    }
}
export {Index as default}