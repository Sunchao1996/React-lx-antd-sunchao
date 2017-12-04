import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import HeaderIndex from '../../components/Header';
import MenuIndex from '../../components/menu';
import '../../../stylesheets/index.less'
import 'antd/dist/antd.less';
import IndexLogo from '../../components/menu/indexlogo';
const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout className="index-container">
                <Sider className="index-sider" width="256" collapsedWidth="50" trigger={null}
                       collapsible
                       collapsed={this.state.collapsed}>
                    <div style={{height: '9%', width: '100%', background: '#00284d'}}>
                        <IndexLogo collapsed={this.state.collapsed}/>
                    </div>
                    <MenuIndex />
                </Sider>
                <Layout >
                    <Header className="index-header">
                        <HeaderIndex collapsed={this.state.collapsed} changeSider={this.toggle.bind(this)}/>
                    </Header>
                    <Content className="index-content">content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        );
    }
}
export {Index as default}