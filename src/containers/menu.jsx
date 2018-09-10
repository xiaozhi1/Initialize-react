import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Layout } from 'antd';
import '../style/menu.css'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menuss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'alipay',
        }
        console.log('dalibao-->点击以后再点击menu,值为2,若直接进menu,值为1------>',this.props.paramsRedu)
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }

    render() {
        return (
            <div className="menu">
                <Layout>
                        <Sider>
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                                breakpoint="xl"
                            >
                                <Menu.Item key="mail">
                                <Icon type="mail" />mail
                                </Menu.Item>

                                <Menu.Item key="app" >
                                <Icon type="appstore" />appstore
                                </Menu.Item>

                                <Menu.Item key="alipay">
                                <Icon type="appstore" />appstore
                                </Menu.Item>
                            </Menu> 
                        </Sider>
                        <Content >
                            <div className="content">
                                Content
                            </div>
                        </Content>
                </Layout>
            </div>
            
            
        )
    }
}
export default connect((state) => {
    return { paramsRedu: state.paramsSetReducer.paramsRedu };
},
(dispatch) => {
    return { };
}
)(Menuss)
